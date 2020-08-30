<!--
 * @Author: xion
 * @Date: 2020-08-23 00:18:55
 * @LastEditors: xion
 * @LastEditTime: 2020-08-30 21:37:27
 * @FilePath: \redding\src\App.vue
 * @Description: 真是太开心了
-->
<template>
    <router-view />
    <Drag  v-if="false"/>
    <todo />
</template>
<script>
import { mapGetters } from "vuex";
// import hotkeys from "hotkeys-js";
import Drag from "@/components/Drag.vue";
import {setup, reactive, toRefs} from 'vue';
import { defineComponent } from "vue";
// Vue.component('todo', {
//   name: "todo",
//   template: '<li>这是个待办项{{message}}</li>',
//   data(){
//     return {
//       message: "123"
//     }
//   }
// })
const todo = defineComponent({name:"To",template: '我是人'})
const w = window;

console.log("drag", Drag)
console.log(todo)
export default {
  name: "App",
  components: { 
    Drag,todo
  },
  setup(props, ctx){
    console.log(ctx,this)
    const msg = reactive({v: "msg content"})
    return {
      // msg,
      ...toRefs(msg)
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
</style>
