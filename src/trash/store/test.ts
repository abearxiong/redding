const testModules = {
    namespaced: true,
    state: {count: 1}, // store.state.test.count
    mutations: {
      increment (state: any, n: number) {
        // 变更状态
        // store.commit('increment', 10)
        if(n){
          state.count = state.count+n;
        }else{
          state.count++
        }
      }
    },
    actions: { increment (context: any, payload: any) {
      context.commit('increment', payload)
    } },
    getters: {
      // 只有在根下可以直接从实例获取
      COUNT: (state: { count: any }) => {
        //store.getters.state
        return state.count
      }
    }
  }
const testModules2 = {
  state: {
    count2: 1
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
    },
    // 子模块的时候出现设置
    // requestPages:{
    //     root: true,
    //     handler: async({ commit }:any) => {
    //         const v = get("/pages.json");
    //         console.log(v);
    //     }
    // },

  }
}
export {
    testModules,
    testModules2
}

// const store = new Vuex.Store({
//   modules: {
//     account: {
//       namespaced: true,

//       // 模块内容（module assets）
//       state: () => ({ ... }), // 模块内的状态已经是嵌套的了，使用 `namespaced` 属性不会对其产生影响
//       getters: {
//         isAdmin () { ... } // -> getters['account/isAdmin']
//       },
//       actions: {
//         login () { ... } // -> dispatch('account/login')
//       },
//       mutations: {
//         login () { ... } // -> commit('account/login')
//       },

//       // 嵌套模块
//       modules: {
//         // 继承父模块的命名空间
//         myPage: {
//           state: () => ({ ... }),
//           getters: {
//             profile () { ... } // -> getters['account/profile']
//           }
//         },

//         // 进一步嵌套命名空间
//         posts: {
//           namespaced: true,

//           state: () => ({ ... }),
//           getters: {
//             popular () { ... } // -> getters['account/posts/popular']
//           }
//         }
//       }
//     }
//   }
// })