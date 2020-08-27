<template>
  <div class="content">
    <div class="content-header">
      <div class="content-header-title">{{ currentPage.title }}</div>
      <div class="content-header-tools" >
        <i class="iconfont icon-icon_share" style="font-size:1.5rem" @click="onMsg"></i>
        <i class="iconfont icon-icon_refresh" style="font-size:1.5rem" @click="onMsg"></i>
        <!-- <i class="iconfont icon-gengduo1" style="font-size:1.5rem" @click="onMsg"></i> -->
      </div>
    </div>
    <div class="content-blocks-title">
      <div class="content-blocks-title-wrapper">
         <div 
            class="content-blocks-title-input" 
            contenteditable="true" 
            v-text="currentPage.title"
            @input="onChangeTitle"
         ></div>
      </div>
     
    </div>
    <div class="content-blocks">
      <div
        class="page-block-wrapper"
        v-for="item in currentBlocks"
        :key="item.openid"
      >
        <div class="page-blocks-controller-blank">
          <!-- <span class="page-blocks-controller" @click="onShowTips(1)"
            ><i class="iconfont icon-jieshao"></i
          ></span> -->
        </div>
        <Block :content="item" />
        <ContentTips v-if="isShowTips" />
      </div>
      <div class="page-block-none" v-if="currentBlocks.length==0">
        <div class="none" @click="addBlock" title="点击添加">内容不存在</div>
      </div>
    </div>
    <div class="page-block-footer"></div>
    <div class="page-block-template-btn-group">
        <div @click="addBlock">添加小块</div>
        <div @click="onMsg">显示编辑</div>
        <div @click="onMsg">预览编辑</div>
        <div class="is-ok" @click="onShowMarkdown">全局编辑</div>
        <div @click="onMsg">查看源码</div>
        <div @click="onMsg">查看信息</div>
    </div>
    <div class="page-block-template-btn-group">
        <div @click="onMsg">临时存在</div>
        <div class="is-ok"  @click="addBlock">添加内容</div>
        <div @click="onMsg">删除内容</div>
        <div @click="onMsg">添加页面</div>
        <div @click="onMsg">删除页面</div>
        <div @click="onMsg">查看页面</div>
    </div>
    <Message />
    <Markdown v-if="isShowMarkdown" v-on:on-show-markdown="onShowMarkdown"/>
  </div>
</template>

<script>
// 功能描述，根据内容设置页面，根据页面设置选项
// 外扩关于格式和数据

// 内扩关于编辑配置
import Block from "./blocks/Block";
import Message from "@/components/Message";

import ContentTips from "./compontent/ContentTips";
import Markdown from "./blocks/Markdown";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Content",
  components: {
    Block,
    ContentTips,
    Message,
    Markdown
  },
  data() {
    return {
      isShowTips: false,
      isShowMarkdown: false,
      currentTips: 0,
    };
  },
  computed: {
    ...mapGetters(["currentBlocks", "currentPage"])
  },
  methods: {
    ...mapActions(["addBlock", "setPage"]),
    onShowTips() {
      this.isShowTips = !this.isShowTips;
    },
    onShowMarkdown() {
      this.isShowMarkdown = !this.isShowMarkdown;
      this.reload()
    },
    reload() {
            this.$forceUpdate()
        },
    onMsg() {
      alert("临时占位置")
    },
    onChangeTitle(e) {
      const page = this.currentPage;
      page.title = e.target.innerHTML;
      this.setPage(page);
    }
  }
};
</script>
<style lang="scss" scoped>
.content {
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .content-header {
    display: flex;
    .content-header-title {
      flex-grow: 1;
    }
    .content-header-tools {
      margin-right: 2rem;
    }
  }
  .content-blocks-title {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    .content-blocks-title-wrapper {
      width: 80%;
      margin: auto;
      .content-blocks-title-input {
        margin-left: 2rem;
      }
    }
  }
  .content-blocks {
    flex-grow: 1;
    overflow-y: scroll;
  }
  
  .page-block-wrapper {
    display: flex;
    margin: auto;
    width: 80%;
  }
  .page-blocks-controller {
    display: none;
  }
  .page-blocks-controller-blank {
    width: 20px;
    // margin-top: 2rem;
  }
  .page-block-wrapper:hover .page-blocks-controller {
    display: block;
  }
  .page-block-footer {
    margin-top: 1rem;
  }
}
// 样式修改
.content {
  .content-header {
    line-height: 2rem;
    height: 2rem;
    .content-header-title {
      text-align: left;
      text-indent: 2rem;
      font-size: 1.2rem;
    }
    .content-header-tools {
      font-size: 1.5rem;
    }
  }
  .content-blocks-title {
    .content-blocks-title-input {
      // width: 10rem;
      // border-bottom: 2px solid blueviolet;
      text-align: left;
      outline: none;
    }
    .content-bloks-title-input:focus {
      border-bottom: 2px solid rgba(255,255,25, 0.3)
    }
  }
}
.page-block-template-btn-group {
  display: flex;
  justify-content: space-around;
}

</style>
