<!--
 * @Author: xion
 * @Date: 2020-08-23 00:18:55
 * @LastEditors: xion
 * @LastEditTime: 2020-08-29 16:51:06
 * @FilePath: \reding\src\App.vue
 * @Description: 真是太开心了
-->
<template>
    <router-view />
    <div  id="wrapper" ref="wrapper" width="100%" height="500px;">内容<input /><textarea>dd</textarea><div contenteditable="true"></div></div>
    <div id="wrapper2">内容2<input/></div>
</template>
<script>
import Message from "@/components/Message"; 
import { mapGetters } from "vuex";
import hotkeys from "hotkeys-js";
export default {
  name: "App",
  computed: {
    ...mapGetters(["showMsg"])
  },
  mounted(){
    const el = this.$refs.wrapper
    hotkeys('ctrl+a,alt+a+s', {keyup: true}, function(event, handler) {
    if (event.type === 'keydown') {
      console.log('keydown:', event.type, handler, handler.key);
    }

    if (event.type === 'keyup') {
      console.log('keyup:', event.type, handler, handler.key);
    }
  });
  hotkeys('command+ctrl+shift+a,f', function(event){
    console.log('c=', hotkeys.getPressedKeyCodes()); //=> [17, 65] or [70]
    event.preventDefault()
  })
  hotkeys('*', function(event){
    console.log("key=:", hotkeys.getPressedKeyCodes(), event);
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

  // hotkeys('o, enter', {
  //   scope: 'all',
  //   element: el,
  //   // keyup: true,
  // }, function(event, handler){ 
  //   console.log('do something else', event, handler);
  //   event.preventDefault()
  // });
  // hotkeys.filter= (event)=>true;
  }
}


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
