/*
 * @Author: xion
 * @Date: 2020-09-03 21:51:52
 * @LastEditors: xion
 * @LastEditTime: 2020-09-04 17:06:49
 * @FilePath: \redding\src\router\user.ts
 * @Description: 真是太开心了
 */
import { RouteRecordRaw } from 'vue-router';
const UserRoute: RouteRecordRaw[] =[
    {
        path: "/user/login",
        name: "UserLogin",
        component: () => import(/* webpackChunkName: "userlogin" */ "../views/user/Login.vue")
      }
]  

export { 
    UserRoute
}