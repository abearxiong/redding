import { createStore } from "vuex";
import { testModules, testModules2 } from "./test";

import { style } from "./style";
import { command } from "./command";
import { setting } from "./setting";
import { pages }  from "./pages";



const store = createStore({
  state: {store:1,userInfo:{name:"xion",gerder: "男"}},
  mutations: {},
  actions: {},
  getters: {
    userInfo(state: any) {
        return state.userInfo;
    }
  },
  modules: {
    test: testModules,test2: testModules2,
    command,
    style,
    setting,
    pages,
  }
});

const w: any = window;
if(window){
  w.store = store;
}

export default store;