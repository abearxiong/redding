<!--
 * @Author: xion
 * @Date: 2020-08-31 10:22:33
 * @LastEditors: xion
 * @LastEditTime: 2020-09-03 18:02:51
 * @FilePath: \redding\src\views\page\PageBlocks.vue
 * @Description: 真是太开心了
-->
<template>
    <div class="page-blocks padding-12">
        <div class="page-block-title no-outline" contenteditable="true" @input="changeTitle" @blur="updatePageTitleByBlur">
            {{page.title}}
        </div>
        <div class="hr" style="width:80%;" v-if="blocks.length!==0"/>
        <WindowHelp v-if="(blocks.length==0||isNeedHelp)&&!showMarkdown" :helpContent="DocPageBlocksHelper" ><pre>帮助内容</pre></WindowHelp>
        <div class="page-block-item" v-for="item in blocks" :key="item.openid">
            <template v-if="item.type===205">
                <div v-html="parse(item.value)" @click="onShowMarkdown(item)"></div>
            </template>
        </div>
        <Markdown v-if="showMarkdown" :markdown="markdown" v-on:update="update" v-on:markdown-help="markdownHelp">
            <WindowHelp v-if="isMarkdownNeedHelp" :helpContent="DocMarkdownHelper" ><pre>帮助内容</pre></WindowHelp>
        </Markdown>
        <div class="no-blocks margin-left-24" v-if="blocks.length===0">没有节点,按N添加Markdown</div> 
    </div>
</template>
<script>
import { magGetters, mapActions, mapMutations } from "vuex";
import { parseText, parseHtml } from "@/utils";
import WindowHelp from "@/components/WindowHelp";
import Markdown from "@/components/Markdown";
// import store from "@/store";
import { Block,Page, BlockType } from "@/models";
// import hotkeys from "hotkeys-js";
import { debounce } from "@/utils";
import { DocPageBlocksHelper, DocMarkdownHelper } from "@/store/doc-key";
import hotkeys from 'hotkeys-js';
hotkeys = window.hotkeys;
export default {
    name: "PageBlocks",
    components: { WindowHelp, Markdown },
    data(){
        return {
            blocks: [],
            blockOpenid: "",
            delay: "",
            DocPageBlocksHelper,
            DocMarkdownHelper,
            isNeedHelp: true,
            isMarkdownNeedHelp: true,
            showMarkdown: false,
            page: {},
            title: "",
        }
    },
    computed: {
        markdown() {
            return this.blocks.find(item=>item.openid===this.blockOpenid)
        }
    },
    mounted(){
        // console.log(this.$route.params.openid)
        this.init();
        hotkeys("ctrl+a","pageBlocks",this.addNew);
        hotkeys("ctrl+h","pageBlocks",this.showHelp);
        hotkeys.setScope("pageBlocks")
    },
    unmounted() {
        hotkeys.unbind("ctrl+a","pageBlocks",this.addNew);
        hotkeys.unbind("ctrl+h","pageBlocks",this.showHelp);
        hotkeys.setScope("all")
    },
    methods: {
        ...mapMutations(["updateNote"]),
        ...mapActions(["addBlock", "reload"]),
        addNew(event) {
            if(this.page.openid) {
                const block = new Block({parent: this.page.openid, type: BlockType.Markdown})
                this.addBlock(block);
                event.preventDefault();
            }else{
                alert("添加失败")
            }
        },
        changeTitle(e) {
            // console.log(e.target.innerHTML)
            const title = e.target.innerHTML;
            this.title = title;
            this.delay = this.debounceFun(title)
        },
        debounceFun: debounce(2000, false, function (title) {
            const changePage = new Page(this.page)
            changePage.update({title});
            // console.log(changePage)
            this.updateNote(changePage);
            this.delay = ""
        }),
        init(){
            const openid = this.$route.params.openid;
            // this.blocks = this.getBlocks(openid);
            this.page = this.$store.getters.getPage(openid);
            this.blocks = this.$store.getters.getBlocks(openid);
            // console.log(this.blocks,openid,parseText);
            // console.log(parseText(this.blocks[0].value))
        },
        markdownHelp(){
            this.isMarkdownNeedHelp = !this.isMarkdownNeedHelp;
        },
        onShowMarkdown(item){
            this.blockOpenid = item.openid;
            this.showMarkdown = true;
        },
        parse(v){
            // console.log("v", v);
            if(v===""||!v)return parseText("markdown内容为空");
            return parseText(v)
        },
        showHelp(event, handler){
            this.isNeedHelp = !this.isNeedHelp;
            console.log("event", event, handler);
            event.preventDefault();
        },
        updatePage(title) { 
            const changePage = new Page(this.page)
            changePage.update({title});
            this.updateNote(changePage);
        },
        updatePageTitleByBlur(){
            if(this.delay)this.delay.cancel();
            this.updatePage(this.title);
        },
        update(val){
            // 从组件更新对应的blocks
            let block;
            let needUpdate = false;
            const hashs = [];
            this.blocks = this.blocks.map(item=>{
                if(item.openid===val.openid) {
                    block = new Block(item);
                    block.value = val.value;
                    block.setHash();
                    needUpdate = block.hash !== item.hash;
                    if(needUpdate){
                        block.updateTime()
                    }
                    hashs.push(block.hash)
                    return block;
                };
                hashs.push(item.hash)
                return item;
            })
            if(needUpdate) {
                // 更新 page的信息 暂时不管
                // const page = this.page;
                // page.setArrHash(hashs);
                // this.updateNote(page);
                this.updateNote(block);
            }
            
            this.showMarkdown = false;
            hotkeys.setScope("pageBlocks")
            // 因为热更新的问题
            this.reload();
        },
    }
}
</script>
<style lang="scss" scoped>
.page-blocks {
    width: 80%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    box-sizing: border-box;
    background-color: #fff;
    transition: 0.3s;
}
</style>