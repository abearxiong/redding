/*
 * @Author: xion
 * @Date: 2020-09-02 14:29:37
 * @LastEditors: xion
 * @LastEditTime: 2020-09-05 07:28:44
 * @FilePath: \redding\src\types\state\userinto.ts
 * @Description: 真是太开心了
 */
// import { ActionContext } from "vuex";

interface ShowMsg {
    on: boolean,
    title?: string,
    body?: any
  }
interface SyncWeb {
    // 同步服务配置 // 同步状态 // 是否网络在线
    on: boolean,
    isOnline: boolean
  }
