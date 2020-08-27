import { createApp } from "vue";
import App from "./App.vue";
// import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// import ElementUI from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/iconfont.css";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
