<!--
 * @Author: xion
 * @Date: 2020-08-31 10:22:33
 * @LastEditors: xion
 * @LastEditTime: 2020-09-01 18:29:14
 * @FilePath: \redding\src\views\page\PageBlocks.vue
 * @Description: 真是太开心了
-->
<template>
    <div class="page-blocks card padding-12">
        <div class="page-block-title no-outline" contenteditable="true" @input="changeTitle" @blur="updatePage">
            {{page.title}}
        </div>
        <div class="hr" style="width:80%;" v-if="blocks.length!==0"/>
        <WindowHelp v-if="(blocks.length==0||isNeedHelp)&&!showMarkdown" :helpContent="DocPageBlocksHelper" ><pre>帮助内容</pre></WindowHelp>
        <div class="page-block-item" v-for="item in blocks" :key="item.openid">
            <template v-if="item.type===205">
                <div v-html="parse(item.value)" @click="showMarkdown=!showMarkdown"></div>
                <Markdown v-if="showMarkdown" :markdown="item" v-on:update="update" v-on:markdown-help="markdownHelp">
                    <WindowHelp v-if="isMarkdownNeedHelp" :helpContent="DocMarkdownHelper" ><pre>帮助内容</pre></WindowHelp>
                </Markdown>
            </template>
        </div>
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
import hotkeys from "hotkeys-js";
import { debounce } from "@/utils";
import { DocPageBlocksHelper, DocMarkdownHelper } from "@/store/doc-key";
export default {
    name: "PageBlocks",
    components: { WindowHelp, Markdown },
    data(){
        return {
            blocks: [],
            page: {},
            isNeedHelp: true,
            isMarkdownNeedHelp: true,
            showMarkdown: false,
            delay: "",
            DocPageBlocksHelper: DocPageBlocksHelper,
            DocMarkdownHelper
        }
    },
    computed: {

    },
    mounted(){
        // console.log(this.$route.params.openid)
        this.init();
        hotkeys.setScope("pageBlock")
        hotkeys("n","pageBlock",this.addNew);
        hotkeys("ctrl+h","pageBlock",this.showHelp);
    },
    unmounted() {
        hotkeys.unbind("n","pageBlock",this.addNew);
        hotkeys.unbind("ctrl+h","pageBlock",this.showHelp);
        hotkeys.setScope("all")
    },
    methods: {
        ...mapMutations(["updateNote"]),
        ...mapActions(["addBlock"]),
        changeTitle(e) {
            // console.log(e.target.innerHTML)
            const title = e.target.innerHTML;
            this.delay = this.debounceFun(title)
        },
        init(){
            const openid = this.$route.params.openid;
            // this.blocks = this.getBlocks(openid);
            this.page = this.$store.getters.getPage(openid);
            this.blocks = this.$store.getters.getBlocks(openid);
            // console.log(this.blocks,openid,parseText);
            // console.log(parseText(this.blocks[0].value))
        },
        showHelp(event, handler){
            this.isNeedHelp = !this.isNeedHelp;
            event.preventDefault();
        },
        parse(v){
            // console.log("v", v);
            if(v===""||!v)return parseText("markdown内容为空");
            return parseText(v)
        },
        updatePage(title) {
            if(this.delay)this.delay.cancel();
            const changePage = new Page(this.page)
            changePage.update({title});
            // console.log(changePage)
            this.updateNote(changePage);
        },
        debounceFun: debounce(2000, false, function (title) {
            const changePage = new Page(this.page)
            changePage.update({title});
            // console.log(changePage)
            this.updateNote(changePage);
            this.delay = ""
        }),
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
            // console.log("blocks", this.blocks)
            if(needUpdate) {
                // 更新 page的信息 暂时不管
                // const page = this.page;
                // page.setArrHash(hashs);
                // this.updateNote(page);
                this.updateNote(block);
            }
            
            this.showMarkdown = false;
            hotkeys.setScope("pageBlock")
        },
        addNew(event) {
            if(this.page.openid) {
                const block = new Block({parent: this.page.openid, type: BlockType.Markdown})
                this.addBlock(block);
                event.preventDefault();
            }else{
                alert("添加失败")
            }
        },
        preventDefault(event, handler) {
            event.preventDefault();
        },
        markdownHelp(){
            this.isMarkdownNeedHelp = !this.isMarkdownNeedHelp;
        }
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
}
</style>