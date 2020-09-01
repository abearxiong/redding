/*
 * @Author: xion
 * @Date: 2020-08-23 00:18:55
 * @LastEditors: xion
 * @LastEditTime: 2020-09-01 20:33:25
 * @FilePath: \redding\src\main.ts
 * @Description: 真是太开心了
 */
import { createApp } from "vue";
import * as Vue from "vue";
import { mapGetters, mapActions, mapMutations, mapState} from "vuex";
import App from "./App.vue";
// import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/iconfont.css";
import "@/assets/app.scss";
import  hotkeys from 'hotkeys-js';

import { lg } from "@/utils";
import { importJson } from "@/utils";

if ( window) {
  window.log = lg.log;
  window.clear = lg.clear;
  window.logHelper = lg;
}
const app = createApp(App)
  .use(store)
  .use(router);

app.mount("#app");
// hotkeys('*', (event, handler)=>{
//   console.log("keys=", event, handler)
// });
const map = (v:any, done:any) => {
  const funcs = {...done(v)};
  for(const i in funcs) {
    funcs[i] = funcs[i].bind(app);
  }
  return funcs;
}
if (window) {
  window.store = store;
  window.smap = {
    getters: (v:string[]) => map(v, mapGetters),
    actions: (v:string[]) => map(v, mapActions),
    mutions: (v:string[]) => map(v, mapMutations),
    state: (v:string[]) => map(v, mapState),
  }
  window.Vue = Vue;
  window.app = app;
}

// const callback = (data:any)=>console.log(data);
// importJson(callback)
// console.log(importJson)
// window.test = importJson;