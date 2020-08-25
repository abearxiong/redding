/**
 * 全局默认设置
 * 是否显示的设置，显示的内容设置，内容绑定的数据设置
 *
 * 功能留存
 */

const setting = {
    state: {
      isShow: {},
      currentPage: "openid",
      currentPageBlock: "openid",
    },
    getters: {
      COUNT2: (state: any) => {
        return state.count2
      }
    },
    mutations: {
      ti(state: any, n: number) {
        if(n){
          state.count2 = state.count2+n;
        }else{
          state.count2++
        }
      }
    },
    actions: {
      ti(context: any, payload: any){
        context.commit('ti', payload)
      }
    }
  }