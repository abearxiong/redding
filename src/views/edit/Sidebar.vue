<template>
  <div class="sidebar" v-if="showSidebar">
    <div class="title">
      <div class="content sidebar-btn">xion</div>
      <i class="sidebar-btn sidebar-icon sidebar-expand el-icon-s-unfold" @click="onChangeShowSidebar"></i>
    </div>
    <SidebarBtn :title="'命令'" :icon="'icon-icon_search'"/>
    <!-- <div class="feature" title="命令">命令</div>
    <div class="notification sidebar-btn">提示</div>
    <div class="setting sidebar-btn">设置</div> -->
    <div class="pages-index-title">笔记本</div>
    <div class="pages-index">

    </div>
    <div class="sidebar-time sidebar-btn" >{{DF}}</div>
  </div>
  <i class="sidebar-btn sidebar-icon sidebar-no-expand el-icon-s-fold" style="position:fixed;" v-if="!showSidebar" @click="onChangeShowSidebar"></i>
</template>

<script>
import { df } from "@/utils"
import SidebarBtn from "./compontent/SidebarBtn";

export default {
  name: "Sidebar",
  components: {
    SidebarBtn
  },
  data() {
    return {
      showSidebar: false,
      nowTime: 1,
      timer: ''
    }
  },
  computed: {
    DF(){
      return df(this.nowTime);
    }
  },
  mounted() {
    this.nowTime = new Date().getTime()
    this.onSetNowTime();
  },
  beforeUnmount() {
    if(this.timer!==""){
      clearInterval(this.timer);
      this.timer = "";
    }
  },
  methods: {
    onChangeShowSidebar() {
      this.showSidebar = !this.showSidebar;
    },
    onTimeAdd(){
      this.nowTime++;
    },
    onSetNowTime() {
      this.timer  = setInterval(this.onTimeAdd, 1000);
    }
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
  background-color: rgba(64,158,255,0.2);
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
  color: rgba(25, 23, 17, 0.6)
}
.sidebar-btn {
  user-select: none;
  cursor: pointer;
}
.sidebar-btn:hover {
  background-color: rgba(64,158,255,0.4);
}
.nosidebar {
  display: none;
}
.sidebar-icon {
  font-size: 1.4rem;
}
</style>