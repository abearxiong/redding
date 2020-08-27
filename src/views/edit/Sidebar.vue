<template>
  <div class="sidebar" v-if="showSidebar">
    <div class="title">
      <div class="content sidebar-btn">xion</div>
      <i
        class="sidebar-btn sidebar-icon sidebar-expand el-icon-s-unfold"
        @click="onChangeShowSidebar"
      ></i>
    </div>
    <SidebarBtn :title="'命令'" :icon="'icon-icon_search'" />
    <!-- <div class="feature" title="命令">命令</div>
    <div class="notification sidebar-btn">提示</div>
    <div class="setting sidebar-btn">设置</div> -->
    <div class="pages-index-title" @click="onShowNoteMsg">笔记本</div>
    <div class="pages-index">
      <div class="is-ok pages-index-item sidebar-btn" v-for="item in pageIndex" :key="item.openid" :style="{'text-indent': 1*item.deep + 'rem'}" @click="toPage(item.openid)">
        {{item.title}}
      </div>
      <div class="page-index-none" v-if="pageIndex.length==0" 
        style="font-size: 0.8rem;margin-top: 0.4rem;text-align:center;"
        @click="addPage"
      >
        没有笔记
      </div>
    </div>
    <div class="sidebar-time sidebar-btn" >{{ formatTime }}</div>
  </div>
  <i
    class="sidebar-btn sidebar-icon sidebar-no-expand el-icon-s-fold"
    style="position:fixed;"
    v-if="!showSidebar"
    @click="onChangeShowSidebar"
  ></i>
</template>

<script>
import { df } from "@/utils";
import SidebarBtn from "./compontent/SidebarBtn";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Sidebar",
  components: {
    SidebarBtn
  },
  data() {
    return {
      showSidebar: true,
      nowTime: 1,
      formatTime: "",
      timer: ""
    };
  },
  computed: {
    ...mapGetters(["pageIndex"])
  },
  mounted() {
    this.nowTime = new Date().getTime();
    this.onSetNowTime();
  },
  beforeUnmount() {
    if (this.timer !== "") {
      clearInterval(this.timer);
      this.timer = "";
    }
  },
  methods: {
    ...mapActions(["toPage", "addPage"]),
    onChangeShowSidebar() {
      this.showSidebar = !this.showSidebar;
    },
    onTimeAdd() {
      this.nowTime++;
      this.formatTime = df(new Date());
    },
    onSetNowTime() {
      this.timer = setInterval(this.onTimeAdd, 1000);
    },
    onShowNoteMsg() {
      this.$store.getters.msg("笔记显示位置，临时不嵌套");
    },
  }
};
</script>
<style lang="scss" scoped>
// 位置
.sidebar {
  height: 100%;
  min-width: 14rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 1rem 0.52rem 0 0.52rem;
  box-sizing: border-box;

  .title {
    display: flex;
    // justify-content: space-between;
    .content {
      flex-grow: 1;
      font-size: 1.1rem;
    }
    .sidebar-expand {
      float: right;
    }
  }
  .feature {
    margin: auto;
    height: 40;
    input {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
  .pages-index {
    flex-grow: 1;
    overflow-y: auto;
  }
  .sidebar-time {
    margin-bottom: 0;
  }
}
// 样式
.sidebar {
  background-color: rgba(64, 158, 255, 0.2);
  .sidebar-time {
    text-align: center;
  }
}
.sidebar > div {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  // font-weight: 700px;
  // font-size: 1rem;
  // height: 1.4rem;
  // line-height: 1.4rem;
  transition: background 20ms ease-in 0s;
  color: rgba(25, 23, 17, 0.6);
}
.sidebar-btn {
  user-select: none;
  cursor: pointer;
}
.sidebar-btn:hover {
  background-color: rgba(64, 158, 255, 0.4);
}
.nosidebar {
  display: none;
}
.sidebar-icon {
  font-size: 1.4rem;
}
</style>
