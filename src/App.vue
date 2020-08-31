<!--
 * @Author: xion
 * @Date: 2020-08-23 00:18:55
 * @LastEditors: xion
 * @LastEditTime: 2020-08-31 23:11:37
 * @FilePath: \redding\src\App.vue
 * @Description: 真是太开心了
-->
<template>
    <router-view   v-if="isRouterAlive"/>
    <Drag  v-if="false"/>
</template>
<script>
import { mapGetters } from "vuex";
import Drag from "@/components/Drag.vue";
import hotkeys from "hotkeys-js";

export default {
  name: "App",
  components: { Drag },
  data(){
    return {
      isRouterAlive: true
    }
  },
  mounted(){
    hotkeys("ctrl+r",  this.refresh);
  },
  unmounted(){
    hotkeys.unmounted("ctrl+r", this.refresh);
  },
  methods: {
    reload () {
        this.isRouterAlive = false
        this.$nextTick(() => (this.isRouterAlive = true))
    },
    refresh(event){
      this.$root.reload();
      console.log("刷新");
      event.preventDefault();
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
}
@media  (max-width: 424px) {
  .show-help{
    position: unset
  }
}
</style>
