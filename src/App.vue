<!--
 * @Author: xion
 * @Date: 2020-08-23 00:18:55
 * @LastEditors: xion
 * @LastEditTime: 2020-09-01 21:48:31
 * @FilePath: \redding\src\App.vue
 * @Description: 真是太开心了
-->
<template>
    <router-view   v-if="isRouterAlive"/>
    <Drag  v-if="false"/>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Drag from "@/components/Drag.vue";
import hotkeys from "hotkeys-js";
import { preventDefault } from "@/utils";
export default {
  name: "App",
  components: { Drag },
  data(){
    return {
      isRouterAlive: true
    }
  },
  mounted(){
    // hotkeys('*',"all", this.printKey);
    hotkeys('*', (event, handler)=>{
      console.log("keys", event, handler)
    });
    hotkeys("ctrl+r",  this.refresh);
    const u =/pages|block|comment|about|share|user|/;
    hotkeys("ctrl+left", (event) => {
      console.log("history",history)
      if(history.state.back){
        if(u.test(history.state.back)) {
          history.go(-1);
        }
      }else{
        alert("是最后")
      }
    })
    hotkeys("ctrl+right", ()=>{
      if(history.state.forward){
        history.go(1);
      }else{
        alert("是最新")
      }
    })
    // hotkeys.filter=(event)=>{return true;}
    if (window.history && window.history.pushState && !u.test(document.URL)) {
        // 向历史记录中插入了当前页
        history.pushState(null, null, document.URL);
        window.addEventListener('popstate', this.goBack, false);
    }
    this.init();
    window.reload = this.reload;
    this.setReload(this.reload);

    hotkeys("ctrl+1,ctrl+2,ctrl+3,ctrl+4,ctrl+5,ctrl+6,ctrl+7,ctrl+8,ctrl+9,ctrl+0,ctrl+-,ctrl+=", preventDefault)
    hotkeys("ctrl+tab,ctrl+w,ctrl+e, ctrl+r,ctrl+t,ctrl+o,ctrl+p", preventDefault);
    hotkeys("ctrl+a,ctrl+s,ctrl+d, ctrl+f, ctrl+g,ctrl+h,ctrl+j,ctrl+k,ctrl+l", preventDefault);
    hotkeys("ctrl+z,ctrl+n", preventDefault);
    // ctrl+w, ctrl+t，ctrl+n不能拦截
  },
  unmounted(){
    hotkeys.unbind("ctrl+r", this.refresh);
    hotkeys.unbind('*', this.printKey);
    window.removeEventListener('popstate', this.goBack, false);
  },
  methods: {
    ...mapActions(["initPages", "setReload"]),
    reload () {
        this.isRouterAlive = false
        this.$nextTick(() => (this.isRouterAlive = true))
    },
    refresh(event){
      this.$root.reload();
      console.log("刷新");
      event.preventDefault();
    },
    init() {
      // console.log("init data")
      this.initPages();
    },
    goBack () {
          // console.log("返回");
          // history.pushState(null, null, document.URL);
    },
    printKey (event, handler){
      console.log("key=:", hotkeys.getPressedKeyCodes(), event,handler);
    }
  }
};
</script>
<style lang="scss">
body,html,#app{
  margin: 0;
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
.is-ok {
  border: 1px dotted  red;
  box-sizing: border-box;
}
.x-btn {
  user-select: none;
  cursor: pointer;
}
.show-help {
  position: fixed;
  right: 5rem;
  bottom: 5rem;
  min-width: 15rem;
  z-index: 100;
}
@media  (max-width: 424px) {
  .show-help{
    position: unset
  }
}
</style>
