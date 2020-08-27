/** page的内容
 *
 */
import {
  PageData,
  PagesData,
  PageInterface,
  PageContext,
  PageDataInterface,
  Pair,
  PairInterface,
  PageState
} from "../types";
import { get, post } from "@/server";
import { StoreState } from "@/store/types";

const page = {
  state: {
    pages: []
  },
  getters: {
    pages(state: PageState) {
      return state.pages;
    },
    pagesCount(state: PageState) {
      return state.pages.length;
    },
    currentPage: (
      state: PageInterface,
      getters: any,
      rootState: StoreState,
      rootGetters: any
    ) => {
      return (
        state.pages.find(
          item => item.openid === rootGetters.setting?.currentPageOpenid
        ) ?? []
      );
    },
    pageInfo: (state: PageState) => (currentPageIndex: string) => {
      return state.pages.filter(item => item.openid === currentPageIndex);
    },
    pageIndex: (state: PageState) => {
      return state.pages;
    }
  },
  mutations: {
    setPages(state: PageState, payload: PagesData = []) {
      state.pages = payload ?? [];
    },
    addPage(state: PageState, payload: PageData) {
      state.pages.push(payload);
    },
    setPage(state: PageState, payload: PageData) {
      state.pages = state.pages.map(item=>{
        if(item.openid == payload.openid) {
          return payload;
        }else{
          return item;
        }
      })
    }
  },
  actions: {
    requestPages: async ({ commit, dispatch }: PageContext) => {
      const page = await get("/pages.json");
      const pageArrObject: Array<any> = page.list;
      const pages = pageArrObject.map(item => new PageData().from(item));
      commit("setPages", pages);
      const currentPage: PairInterface = new Pair("currentPageOpenid");
      if (pages.length > 0) {
        currentPage.value = pages[0].openid;
      } else {
        currentPage.value = "";
      }
      dispatch("setSetting", currentPage, { root: true });
      //   dispatch("requestBlocks", null, { root: true });
    },
    deleteAllPages: ({ commit }: PageContext) => {
      commit("setPages");
    },
    addPage: ({ commit, dispatch }: PageContext) => {
      const page = new PageData(1);
      commit("addPage", page);
      dispatch("toPage", page.openid)
    },
    toPage: ({ dispatch, rootGetters }: PageContext, payload: string) => {
      const page:PairInterface = new Pair("currentPageOpenid", payload);
      if(payload === rootGetters.setting.currentPageOpenid)return;
      dispatch("setSetting", page, { root: true });
      dispatch("detectBlocks", payload, { root: true });
    },
    setPage: ({ commit }: PageContext, page: PageData) => {
      commit("setPage", page);
    }
  }
};
export { page };
