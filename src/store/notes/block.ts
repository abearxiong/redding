/*
 * @Author: xion
 * @Date: 2020-08-30 23:23:33
 * @LastEditors: xion
 * @LastEditTime: 2020-09-01 13:22:50
 * @FilePath: \redding\src\store\notes\block.ts
 * @Description: 真是太开心了
 */
/**
 *  block
 */
import { ActionContext } from 'vuex';
import { get, post } from "@/server";
import { Block } from "@/models";
import { exampleBlocks, examplePages, NoteStatus } from '@/models/note/note';

type NoteContext = ActionContext<NoteState, StoreState>
const block = {
  state: {
    blocks: []
  },
  getters: {},
  mutations: {}, 
  actions: {
    addBlock({commit, dispatch}: NoteContext, payload: Block){
      const blcok = new Block(payload??{});
      
      commit("addNote", blcok);
      
      dispatch("reload",null, {root: true})
    }
  }
};
export { block };