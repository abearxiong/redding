/*
 * @Author: xion
 * @Date: 2020-09-03 21:51:52
 * @LastEditors: xion
 * @LastEditTime: 2020-09-05 21:59:36
 * @FilePath: \redding\src\router\user.ts
 * @Description: 真是太开心了
 */
import { RouteRecordRaw } from 'vue-router';
const UserRoute: RouteRecordRaw[] =[
    {
        path: "/user/login",
        name: "UserLogin",
        component: () => import(/* webpackChunkName: "userlogin" */ "../views/user/Login.vue")
    },
    {
        path: "/user/profile",
        name: "UserProfile",
        component: () => import(/* webpackChunkName: "userprofile" */ "../views/user/Profile.vue")
    }
]  

export { 
    UserRoute
}