<!--
 * @Author: xion
 * @Date: 2020-08-23 00:18:55
 * @LastEditors: xion
 * @LastEditTime: 2020-08-29 09:45:22
 * @FilePath: \reding\src\App.vue
 * @Description: 真是太开心了
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import Message from "@/components/Message"; 
import { mapGetters } from "vuex";
import hotkeys from "hotkeys-js";
export default {
  name: "App",
  computed: {
    ...mapGetters(["showMsg"])
  }
}
hotkeys('ctrl+a,alt+a+s', {keyup: true}, function(event, handler) {
  if (event.type === 'keydown') {
    console.log('keydown:', event.type, handler, handler.key);
  }

  if (event.type === 'keyup') {
    console.log('keyup:', event.type, handler, handler.key);
  }
});
hotkeys('command+ctrl+shift+a,f', function(){
  console.log('c=', hotkeys.getPressedKeyCodes()); //=> [17, 65] or [70]
  event.preventDefault()
})
hotkeys('*', function(){
  console.log("key=:", hotkeys.getPressedKeyCodes());
  // event.preventDefault()
})
hotkeys('F1,command, ctrl+shift+q,ctrl+r', function(event, handler) {
  console.log("help", handler.key)
  event.preventDefault()
})
hotkeys('ctrl+k,ctrl+s', function(event) {
  console.log("ctrl+k")
  event.preventDefault()
})
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
