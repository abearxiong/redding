/*
 * @Author: xion
 * @Date: 2020-08-23 00:18:55
 * @LastEditors: xion
 * @LastEditTime: 2020-09-01 16:47:07
 * @FilePath: \redding\src\router\index.ts
 * @Description: 真是太开心了
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { createWebHashHistory } from "vue-router";
import Edit from "../views/Edit.vue";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/edit",
    name: "Edit",
    component: Edit
  },
  {
    path: "/",
    name: "Home",
    // route level code-splitting
    // this generates a separate chunk (home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/pages/index",
    name: "PagesIndex",
    component: () => import(/* webpackChunkName: "pagesindex" */ "../views/page/PagesIndex.vue")
  },
  {
    path: "/page/:openid/blocks",
    name: "PageBlocks",
    component: () => import(/* webpackChunkName: "pageblock" */ "../views/page/PageBlocks.vue")
  },
  {
    path: "/share/page/:openid",
    name: "SharePageBlocks",
    component: () => import(/* webpackChunkName: "sharepageblock" */ "../views/share/SharePageBlocks.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    // 会匹配所有路径
    path: "/*",
    component: Edit
  }
];

let BASE_URL = process.env.BASE_URL;
if (BASE_URL === "") {
  BASE_URL = "/redding/";
}
const router = createRouter({
  // history: createWebHistory(BASE_URL),
  history: createWebHashHistory(),
  routes
});
// console.log("BASE_URL", BASE_URL, "BASE_URL", process.env.BASE_URL)
// console.log("env", process.env)
export default router;
