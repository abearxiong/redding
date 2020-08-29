/*
 * @Author: xion
 * @Date: 2020-08-23 00:18:55
 * @LastEditors: xion
 * @LastEditTime: 2020-08-29 08:38:12
 * @FilePath: \reding\src\store\index.ts
 * @Description: 真是太开心了
 */
import { createStore } from "vuex";
import { testModules, testModules2 } from "./test";

import { style } from "./style";
import { command } from "./command";
import { setting } from "./setting";
import { pages } from "./pages";

const storeState: IStoreState = {
  online: false,
  userInfo: { name: "xion", gerder: "男" }
};
const store = createStore({
  state: () => {
    return storeState;
  },
  mutations: {},
  actions: {},
  getters: {
    userInfo(state: any) {
      return state.userInfo;
    }
  },
  modules: {
    test: testModules,
    test2: testModules2,
    command,
    style,
    setting,
    pages
  }
});

const w: any = window;
if (window) {
  w.store = store;
}

export default store;
