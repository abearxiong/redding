import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Edit from "../views/Edit.vue";
// import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Edit",
    component: Edit,
  },
  {
    path: "/home",
    name: "Home",
    // route level code-splitting
    // this generates a separate chunk (home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    // 会匹配所有路径
    path: '/*',
    component: Edit
  }
];

let BASE_URL = process.env.BASE_URL
if (BASE_URL===""){
  BASE_URL = "/redding/";
}
const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes,
});
console.log("BASE_URL", BASE_URL)
export default router;
