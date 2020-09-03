/*
 * @Author: xion
 * @Date: 2020-08-23 00:18:55
 * @LastEditors: xion
 * @LastEditTime: 2020-09-02 17:25:30
 * @FilePath: \redding\src\store\index.ts
 * @Description: 真是太开心了
 */
import { createStore, ActionContext } from "vuex";
import { registerModule } from "./register";
// import { style } from "./style";
// import { command } from "./command";
// import { setting } from "./userinfo";
import { notes } from "./notes";
import { statistics } from "./statistics";

import { DefaultValue } from "./default-value";
// import { cos } from "./cos";

type StoreContext = ActionContext<StoreState, any>

const storeState: StoreState = {
  reload: ()=>{console.log("未定义reload")},
  online: false,
  wpi: [],
  windows: [],
  userInfo: { name: "xion", gerder: "男" }
};
const store = createStore({
  state: () => {
    return storeState;
  },
  getters: {
    wpi(state){
      return state.wpi;
    }
  },
  mutations: {
    setReload(state: StoreState, payload:any){
      state.reload = payload
    },
    reload(state: StoreState, payload:any){
      // console.log("store reload")
      state.reload()
    }
  },
  actions: {
    setReload({ commit }: StoreContext, payload) {
      commit("setReload", payload)
    },
    reload({ commit }: StoreContext) {
      commit("reload")
    }
  },

  modules: {
    // command,
    // style,
    // setting,
    statistics,
    notes
  }
});
export default store;
