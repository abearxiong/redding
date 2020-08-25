<template>
  <div class="content">
    <div class="content-header">  {{pageHeader.title}}
    </div>
    <div class="content-blocks">
      <div class="page-block-wrapper" v-for="(item,index) in pageCode" :key="index">
          <div class="page-blocks-controller-blank"> <span class="page-blocks-controller" @click="onShowTips(1)"><i class="iconfont icon-jieshao"></i></span></div>
          <Block :content="item"/>
          <ContentTips v-if="isShowTips"/>
      </div>
    </div>
    <Message />
  </div>
</template>

<script>
// 功能描述，根据内容设置页面，根据页面设置选项
// 外扩关于格式和数据

// 内扩关于编辑配置
import Block from '@/components/Block';
import Message from '@/components/Message';
import ContentTips from './compontent/ContentTips';

const dataMock = {
  index: 0,
  type: "markdown",
  openid: "6d6343fe6cacf3e219fd653cf108afcc",
  text: "文本内容<b>hhh</b><table><tr><td>1</td><td>2</td></tr><tr><td>3</td><td>4</td></tr></table> <v1 style=\"color:red;\">123124",
  hash: "2066ebaccb994ed845b1c98046ffa8a1a8edaf49",
  createTime: 1598281553486,
  updateTime: 1598281553486,
  setting: {
    showEdit: true,
    pageViewCanEdit: false
  }
}
export default {
  name: "Content",
  components: {
      Block,
      ContentTips,
      Message
  },
  data() {
      return {
          pageHeader: {
            title: "标题"
          },
          isShowTips: false,
          currentTips: 0,
          pageCode: [dataMock]
      }
  },
  methods: {
    onShowTips() {
      this.isShowTips=!this.isShowTips;
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
      text-align: left;
      text-indent: 20px;
    }
    .content-blocks {
      flex-grow: 1;
    }

    .page-block-wrapper {
      display: flex; 
      width: 80%;
      margin: auto;
    }
    .page-blocks-controller {
      display: none;
    }
    .page-blocks-controller-blank {
      width: 20px;
      // margin-top: 2rem;
    }
    .page-block-wrapper:hover  .page-blocks-controller { 
        display: block;
    }
    // .page-block-wrapper:hover .page-blocks-controller-blank {
    //   border: 1px solid red;
    //   box-sizing: border-box;
    // }
}
</style>