<!--
 * @Author: xion
 * @Date: 2020-08-23 00:18:55
 * @LastEditors: xion
 * @LastEditTime: 2020-08-29 17:59:13
 * @FilePath: \reding\src\App.vue
 * @Description: 真是太开心了
-->
<template>
    <router-view />
    <DragDiv />
</template>
<script lang="ts">
import { mapGetters } from "vuex";
// import hotkeys from "hotkeys-js";
import { Options, Vue } from 'vue-class-component';
import DragDiv from "@/components/DragDiv.vue";
@Options({components:{DragDiv}})
export default class App extends Vue{};
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
</style>
