/**
 * 全局默认设置
 * 是否显示的设置，显示的内容设置，内容绑定的数据设置
 *
 * 功能留存
 */

import { SettingState, ShowMsg, ContextSet } from "./types";

const setingState: SettingState = {
  isShow: {},
  currentPageOpenid: "",
  currentPageBlockOpenid: "",
  currentBaseUrl: "http://localhost:8080/mock/api",
  currentSyncWeb: {on: true, isOnline: true},
  showMsg: {
    on: false,
    title: "",
    body: "",
  }
}
const setting = {
  state: setingState,
  getters: {
    currentBaseUrl: (state: any) => {
      return state.currentBaseUrl ?? "";
    },
    currentSetting: (state: any) => (setting: string) => state[setting] ?? "",
    setting: (state: any) => state,
    showMsg: (state: any) => state.showMsg,
  },
  mutations: {
    setSetting(state: any, payload: any) {
      const { name, value } = payload;
      if (name) {
        state[name] = value ?? "";
      }
    },
    setShowMsg: (state: SettingState, payload: ShowMsg) => {
      state.showMsg == payload??{on:false}
    }
  },
  actions: {
    setSetting(context: any, payload: any) {
      context.commit("setSetting", payload);
    },
    setShowMsg({ commit }: ContextSet, payload: ShowMsg) {
      commit("setShowMsg", payload)
    }
  }
};

export { setting };
