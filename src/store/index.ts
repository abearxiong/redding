/*
 * @Author: xion
 * @Date: 2020-08-23 00:18:55
 * @LastEditors: xion
 * @LastEditTime: 2020-08-30 17:14:38
 * @FilePath: \redding\src\store\index.ts
 * @Description: 真是太开心了
 */
import { createStore } from "vuex";

import { style } from "./style";
import { command } from "./command";
import { setting } from "./userinfo";
import { pages } from "./pages";

const storeState: IStoreState = {
  online: false,
  wpi: [],
  userInfo: { name: "xion", gerder: "男" }
};
const store = createStore({
  state: () => {
    return storeState;
  },
  mutations: {},
  actions: {},
  getters: {
    wpi(state){
      return state.wpi;
    }
  },
  modules: {
    command,
    style,
    setting,
    pages
  }
});
export default store;
