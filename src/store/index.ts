/*
 * @Author: xion
 * @Date: 2020-08-23 00:18:55
 * @LastEditors: xion
 * @LastEditTime: 2020-08-31 22:02:56
 * @FilePath: \redding\src\store\index.ts
 * @Description: 真是太开心了
 */
import { createStore } from "vuex";
import { registerModule } from "./register";
// import { style } from "./style";
// import { command } from "./command";
// import { setting } from "./userinfo";
import { notes } from "./notes";

import { DefaultValue } from "./default-value";

const storeState: StoreState = {
  online: false,
  wpi: [],
  windows: [],
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
    // command,
    // style,
    // setting,
    notes
  }
});
export default store;
