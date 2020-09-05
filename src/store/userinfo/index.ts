/*
 * @Author: xion
 * @Date: 2020-09-02 14:29:37
 * @LastEditors: xion
 * @LastEditTime: 2020-09-05 08:12:53
 * @FilePath: \redding\src\store\userinfo\index.ts
 * @Description: 真是太开心了
 */
/**
 * 全局默认设置
 * 是否显示的设置，显示的内容设置，内容绑定的数据设置
 *
 * 功能留存
 */

import cloudbase from "@cloudbase/js-sdk";
import { app, auth, database } from "@cloudbase/js-sdk";
import { ActionContext } from 'vuex';

type SetContext = ActionContext<SettingState, StoreState>

const cloudApp = cloudbase.init({
  env: "abear2-198d4c"
});
type CloudApp = app.App;
type CloudAuth = auth.App;
type CloudDB = database.App;
type UserLogin = {
  username: string,
  password: string
}
const cloudAuth = cloudApp.auth({persistence: "local"});
const cloudData = cloudApp.database();
type Cloud = { cloudbase: any, cloudApp: CloudApp, cloudAuth: CloudAuth, cloudData: CloudDB }
if( window ) {
  window.cloudbase = cloudbase;
  window.cloudApp = cloudApp;
  window.cloudAuth = cloudAuth;
  window.cloudData = cloudData;
}
const cloud =  {
  cloudbase: cloudbase,
  cloudApp,
  cloudAuth,
  cloudData,
}

interface SettingState {
  isShow: any,
  showMsg: ShowMsg,
  cloud: Cloud,
  currentPageOpenid: string,
  currentPageBlockOpenid: string,
  currentBaseUrl: string,
  currentSyncWeb: SyncWeb, 
}

const setingState: SettingState = {
  cloud,
  isShow: {},
  currentPageOpenid: "",
  currentPageBlockOpenid: "",
  currentBaseUrl: "http://localhost:8080/mock/api",
  currentSyncWeb: { on: true, isOnline: true },
  showMsg: {
    on: false,
    title: "",
    body: "",
  }
}
const userinfo = {
  state: setingState,
  getters: {
    currentBaseUrl: (state: any) => {
      return state.currentBaseUrl ?? "";
    },
    currentSetting: (state: any) => (setting: string) => state[setting] ?? "",
    setting: (state: any) => state,
    showMsg: (state: any) => state.showMsg,
    isLogin: (state: SettingState) => state.cloud.cloudAuth.getLoginState()
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
    setShowMsg({ commit }: SetContext, payload: ShowMsg) {
      commit("setShowMsg", payload)
    },
    async login( { state }: SetContext, payload: UserLogin) {
      //eslint-disable-next-line
      const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      const isEmail = emailRegex.test(payload.username)
      if( isEmail ){
        const loginState = await state.cloud.cloudAuth.signInWithEmailAndPassword(payload.username, payload.password);
      } else {
        const loginState = await state.cloud.cloudAuth.signInWithUsernameAndPassword(payload.username, payload.password);
      }
      // to 可以loginState操作
    },
    async register( { state }: SetContext, payload: UserLogin) {
      const isSeedEmail = state.cloud.cloudAuth.signUpWithEmailAndPassword(payload.username, payload.password); 
    },
    async anonymousLogin( { state }: SetContext) {
      const loginState = await state.cloud.cloudAuth.anonymousAuthProvider().signIn()
    }
  }
};

export { userinfo };
