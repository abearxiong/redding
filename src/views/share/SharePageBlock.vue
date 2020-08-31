<!--
 * @Author: xion
 * @Date: 2020-08-31 10:22:33
 * @LastEditors: xion
 * @LastEditTime: 2020-08-31 23:04:12
 * @FilePath: \redding\src\views\share\SharePageBlock.vue
 * @Description: 真是太开心了
-->
<template>
    <div class="page-blocks card padding-12">
        <div class="page-block-title no-outline" contenteditable="true">{{page.title}}</div>
        <div class="hr" style="width:80%;" v-if="blocks.length!==0"/>
        <WindowHelp v-if="blocks.length==0||isNeedHelp"><pre>帮助内容</pre></WindowHelp>
        <div class="page-block-item" v-for="item in blocks" :key="item.openid">
            <template v-if="item.type===205">
                <div v-html="parse(item.value)"></div>
                <Markdown v-if="showMarkdown" :markdown="item" v-on:update="update"/>
            </template>
        </div>
        <div class="no-blocks margin-left-24" v-if="blocks.length===0">没有节点,按N添加Markdown</div> 
    </div>
</template>
<script>
import { magGetters } from "vuex";
import { parseText, parseHtml } from "@/utils";
import WindowHelp from "@/components/WindowHelp";
import Markdown from "@/components/Markdown";
export default {
    name: "PageBlock",
    components: { WindowHelp, Markdown },
    data(){
        return {
            blocks: [],
            page: {},
            isNeedHelp: false,
            showMarkdown: false,
        }
    },
    computed: {
        
    },
    mounted(){
        this.init();
    },
    methods: {
        init(){
            const openid = this.$route.params.openid;
            this.page = this.$store.getters.getPage(openid);
            this.blocks = this.$store.getters.getBlocks(openid);
        },
        parse(v){
            return parseText(v)
        },
        update(val){
            this.blocks = this.blocks.map(item=>{
                if(item.openid===val.openid)return val;
                return item;
            })
            this.showMarkdown = false;
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