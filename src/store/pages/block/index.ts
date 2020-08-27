import { StoreState } from '@/store/types';
import { PageState, PagesData, PageContext } from './../types';
/**
 * block的内容
 * 节点的数据
 */
import { PageDataInterface, PageData, Pair } from "../types";
import { get, post } from "@/server";
import { Blocks as PagesExample} from "@/expample";
const block = {
  state: {
    blocks: []
  },
  getters: {
    blocks(state: PageState) {
      return state.blocks;
    },
    currentBlocks: (
      state: PageState,
      getters: any,
      rootState: StoreState,
      rootGetters: any
    ) => {
      return state.blocks.filter(
        item => item.parent === rootGetters.setting?.currentPageOpenid
      );
    },
    currentBlock: (state: PageState,
      getters: any,
      rootState: StoreState,
      rootGetters: any) => {
        return state.blocks.find(item=>item.openid === rootGetters.setting.currentPageBlockOpenid);
    },
    pageBlocksInfo: (state: PageState) => (pageOpenid: string) => {
      return state.blocks.filter(item => item.parent === pageOpenid);
    }
  },
  mutations: {
    addBlock: (state: PageState, payload: PageData) => {
      state.blocks.push(payload);
    },
    setBlocks: (state: PageState, payload: PagesData=[]) => {
      state.blocks = payload ?? [];
    },
    setBlock: (state: PageState, payload: PageData) => {
      state.blocks = state.blocks.map(item=>{
        if(item.openid === payload.openid){
          return payload
        }else{
          return item;
        }
      })
      // state.blocks = [...blocks];
    }
  },
  actions: {
    requestBlocks: async ({ commit, dispatch, rootGetters }: PageContext) => {
      //const page = await get("/blocks"); // 请求在模板文件内消失
      const page = PagesExample;
      console.log("block", page, typeof page);
      const pageArrObject: Array<any> = page.list;
      const { currentPageOpenid } = rootGetters.setting;
      let currentPageBlockOpenid = "";
      const blocks = pageArrObject.map(item => {
        if (currentPageOpenid === item?.parent) {
          currentPageBlockOpenid = item?.openid;
        }
        return new PageData(2).from(item);
      });
      commit("setBlocks", blocks);

      dispatch("toBlock", currentPageBlockOpenid)
    },
    addBlock: ({ commit,dispatch,getters,rootGetters } : PageContext, payload: PageDataInterface|undefined=undefined) => {
      if(payload===undefined || payload.openid === undefined){
        payload = new PageData(2);
      }
      payload.category = "markdown";
      payload.parent = rootGetters.setting.currentPageOpenid;
      payload.value = "未输入"
      commit("addBlock", payload);

      dispatch("toBlock", payload.openid)
    },
    detectBlocks( {dispatch, getters}: PageContext, payload: string) {
      const blocks: PageDataInterface[] = getters.pageBlocksInfo(payload);
      if ( blocks.length > 0 ){
        dispatch("toBlock", blocks[blocks.length-1].openid);
      }
      // console.log("检测", blocks[blocks.length-1].openid)
    },
    toBlock( {dispatch}: PageContext, payload: string){
      const currentPageBlock: Pair = new Pair(
        "currentPageBlockOpenid",
        payload
      );
      dispatch("setSetting", currentPageBlock, { root: true });
    },
    setBlock( { commit }: PageContext, payload: PageData){
      commit("setBlock", payload);
    }
    
  }
};
export { block };
