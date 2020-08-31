<!--
 * @Author: xion
 * @Date: 2020-08-31 10:22:19
 * @LastEditors: xion
 * @LastEditTime: 2020-08-31 23:11:51
 * @FilePath: \redding\src\views\Page\PagesIndex.vue
 * @Description: 真是太开心了
-->
<template>
<div class="pages-index-wrapper is-ok el-card">
  <div class="pages-search" v-if="showSearch">
      <input class="p el-input"/>
  </div>
  <div class="pages-index">
       <WindowHelp v-if="pages.length==0||isNeedHelp"><pre>帮助内容</pre></WindowHelp>
      <div class="pages-item el-card" v-for="item in pages" :key="item.openid" :style="item.setting.pageStyle" @click="toPage(item.openid)">
          <div class="pages-item__title paddging-top-12 min-height-38">{{item.title}}</div>
          <div class="pages-item__tags" v-if="item.tags.length>0">{{item.tags}}</div>
          <div class="pages-item__tools" style="height:34px;">哈哈哈</div>
      </div>
      <div class="no-pages el-card padding-left-24 margin-left-16" v-if="pages.length==0">没有笔记,N添加</div>
  </div>
</div>
</template>

<script>
import hotkeys from "hotkeys-js";
import { mapGetters } from "vuex";
import WindowHelp from "@/components/WindowHelp";
export default {
    name: "PagesIndex",
    components: { WindowHelp },
    data(){
        return {
            pages: [],
            showSearch: false,
            isNeedHelp: true
        }
    },
    mounted(){
        this.pages = [{title:"`13",setting:{},openid:"1",tags:[]}]
        hotkeys.setScope("pageIndex")
        hotkeys("ctrl+f","pageIndex",this.search)
        hotkeys("n","pageIndex",this.addNew);
        
        this.init();
    },
    unmounted(){
        hotkeys.unbind("ctrl+f","pageIndex",this.search)
        hotkeys.unbind("n","pageIndex",this.addNew);
        // hotkeys.unbind("ctrl+r","pageIndex", this.refresh);

        hotkeys.setScope("all")
    },
    methods: {
        ...mapGetters(["getPages"]),
        init(){
            this.pages = this.getPages();
            console.log("this.pages")
        },
        search(event) {
             console.log("search")
            this.showSearch = !this.showSearch;
            event.preventDefault();
        },
        toPage(openid){
            this.$router.push("/page/edit/"+openid)
        },
        addNew(event){
            console.log("addNew")
             event.preventDefault();
        },
        refresh(event){
             console.log("refresh");
             this.$root.reload();
             event.preventDefault();
        }
    }
}   
</script>

<style lang="scss" scoped>
.pages-index-wrapper {
    width: 100%;
    height: 100%;
    background-color: grey;
}
.pages-search {
    margin-top: 1rem;
    height: 3rem;
}
.pages-index {
    flex-grow: 1;
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    .pages-item{
        width: 240px;
        margin-top: 1rem;
        margin-left: 1rem;
        .pages-item__title{
            margin-left: 1rem;
        }
        .pages-item__tags{
            margin-left: 1rem;
        }
        .pages-item__tools{
            margin-left: 1rem;
            visibility: hidden;
        }
    }
    .pages-item:hover{
        .pages-item__tools{
            visibility: visible;
        }
    }
}
.paddging-top-12{
        padding-top: 12px;
}
.min-height-38 {
    min-height: 38px;
}
</style>