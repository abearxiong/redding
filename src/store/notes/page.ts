/*
 * @Author: xion
 * @Date: 2020-08-30 23:17:24
 * @LastEditors: xion
 * @LastEditTime: 2020-09-01 13:22:34
 * @FilePath: \redding\src\store\notes\page.ts
 * @Description: 真是太开心了
 */
/**
 * page的内容
 *  主要的功能
 */
import { ActionContext } from 'vuex';
import { get, post } from "@/server";
import { Page } from "@/models";
import { exampleBlocks, examplePages, NoteStatus } from './../../models/note/note';

type NoteContext = ActionContext<NoteState, StoreState>
const page = {
  state: {
    pages: []
  },
  getters: {},
  mutations: {}, 
  actions: {
    addPage({commit, dispatch}: NoteContext, payload: Page){
      const page = new Page(payload??{});
      commit("addNote", page);
      
      dispatch("reload",null, {root: true})
    }
  }
};
export { page };
