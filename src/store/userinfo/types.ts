/*
 * @Author: xion
 * @Date: 2020-09-02 14:29:37
 * @LastEditors: xion
 * @LastEditTime: 2020-09-03 08:43:19
 * @FilePath: \redding\src\store\userinfo\types.ts
 * @Description: 真是太开心了
 */
import { ActionContext } from "vuex";

interface ShowMsg {
    on: boolean,
    title?: string,
    body?: any
  }
interface SyncWeb {
    on: boolean,
    isOnline: boolean
  }
interface SettingState {
    isShow: any
  }
interface SettingState {
    currentPageOpenid: string,
    currentPageBlockOpenid: string,
    currentBaseUrl: string,
    currentSyncWeb: SyncWeb, // 同步服务配置 // 同步状态 // 是否网络在线
  }
  
interface SettingState {
    showMsg: ShowMsg
}
type ContextSet = ActionContext<SettingState, StoreState>

export {
    ShowMsg,
    SyncWeb,
    SettingState,
    ContextSet
}