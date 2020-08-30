import { ActionContext } from "vuex";
import { StoreState } from "../types";

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