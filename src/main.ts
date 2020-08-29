/*
 * @Author: xion
 * @Date: 2020-08-23 00:18:55
 * @LastEditors: xion
 * @LastEditTime: 2020-08-29 14:47:41
 * @FilePath: \reding\src\main.ts
 * @Description: 真是太开心了
 */
import { createApp } from "vue";
import App from "./App.vue";
// import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// import ElementUI from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/iconfont.css";
import hotkeys from 'hotkeys-js';

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");

// hotkeys('ctrl+a,alt+a+s', {keyup: true}, function(event, handler) {
//   if (event.type === 'keydown') {
//     console.log('keydown:', event.type, handler, handler.key);
//   }

//   if (event.type === 'keyup') {
//     console.log('keyup:', event.type, handler, handler.key);
//   }
// });
// hotkeys('command+ctrl+shift+a,f', function(event){
//   console.log('c=', hotkeys.getPressedKeyCodes()); //=> [17, 65] or [70]
//   event.preventDefault()
// })
// hotkeys('*', function(){
//   console.log("key=:", hotkeys.getPressedKeyCodes());
//   // event.preventDefault()
// })
// hotkeys('F1,command, ctrl+shift+q,ctrl+r', function(event, handler) {
//   console.log("help", handler.key)
//   event.preventDefault()
// })
// hotkeys('ctrl+k,ctrl+s', function(event) {
//   console.log("ctrl+k")
//   event.preventDefault()
// })
// hotkeys.filter(function(e:any):any { console.log('e',e); return true; });
// hotkeys('o, enter', {
//   scope: 'all',
//   element: document.getElementById('wrapper'),
// }, function(event, handler){ 
  
//   console.log('do something else', event, handler);
// });