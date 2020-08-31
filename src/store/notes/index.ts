import { ActionContext } from 'vuex';
/*
 * @Author: xion
 * @Date: 2020-08-30 23:16:56
 * @LastEditors: xion
 * @LastEditTime: 2020-08-31 22:49:37
 * @FilePath: \redding\src\store\notes\index.ts
 * @Description: 真是太开心了
 */
/** 
 * 页面的内容
 *  Note当中，只有pages需要保持到浏览器
 *  而blocks和comments是不许要保存到浏
 *  览器当中的
 */
// import { block } from "./block";
// import { comment } from "./comment";
import { page } from "./page";
import { NoteCategory,Page,Block,Comment } from "@/models";
import { exampleBlocks,examplePages } from './../../models/note/note';
import { db } from "@/cache";


interface NoteState {
    pages: Page[],
    blocks: Block[],
    comments: Comment[]
}
type NoteContext = ActionContext<NoteState, StoreState>
 
const noteState: NoteState = {
  pages: [],
  blocks: [...exampleBlocks],
  comments: []
};
type NC = NoteCategory;
type NS = NoteState;
const notes = {
  state: ()=>noteState,
  getters: {
    ...page.getters,
    // ...block.getters,
    // ...comment.getters
      notes: (state: NoteState)=>state,
      getPages: (state: NoteState)=>state.pages,
      getBlocks: (state: NoteState) => (openid: string)=>state.blocks.filter(item=>item.parent===openid),
      getPage: (state: NoteState) => (openid: string) => state.pages.find(item=>item.openid==openid),

  },
  mutations: {
    // 多条笔记操作：设置笔记
    // 单条笔记操作：添加笔记 （删除笔记） 修改笔记 设置笔记
    updateNotes(state: NS, payload: any[]) {
        if(payload.length <= 0)return;
        const category = payload[0].category;
        switch(category){
            case NoteCategory.Page:
                state.pages = payload;break;
            case NoteCategory.Comment:
                state.comments = payload;break;
            case NoteCategory.Block:
                state.blocks = payload; break;
        };
    },
    updateNote(state: NS, payload: any) {
        const category = payload.category;
        switch(category){
            case NoteCategory.Page:
                state.pages =  state.pages.map((item)=>
                    item.openid === payload.openid?payload:item
                );
                break;
            case NoteCategory.Comment:
                state.comments =  state.comments.map((item)=>
                    item.openid === payload.openid?payload:item
                );break;
            case NoteCategory.Block:
                state.blocks =  state.blocks.map((item)=>
                    item.openid === payload.openid?payload:item
                ); break;
        };
    },
    addNote(state: NS, payload: any) {
        const category = payload.category;
        switch(category){
            case NoteCategory.Page:
                state.pages.push(payload);break;
            case NoteCategory.Comment:
                state.comments.push(payload);break;
            case NoteCategory.Block:
                state.blocks.push(payload); break;
        };
    },
    deleteNote(state: NS, payload: any){
        const category = payload.category;
        switch(category){
            case NoteCategory.Page:
                state.pages =  state.pages.filter((item)=>
                    item.openid !== payload.openid
                );
                break;
            case NoteCategory.Comment:
                state.comments = state.comments.filter((item)=>
                     item.openid !== payload.openid
                );break;
            case NoteCategory.Block:
                state.blocks =  state.blocks.filter((item)=>
                     item.openid !== payload.openid
                ); break;
        };
    }
    // ...page.mutations,
    // ...block.mutations,
    // ...comment.mutations
  },
  actions: {
    ...page.actions,
    // ...block.actions,
    // ...comment.actions
    initPagesFromCache({commit }: NoteContext) {
        db.transaction("rw", db.notes,async()=>{
            const pages = await db.notes.where({category: NoteCategory.Page}).toArray();
            commit("updateNotes", pages)
        })
    },
    initBlocksFromCache({commit}: NoteContext, payload:any) {
        db.transaction("rw", db.notes, async()=>{
            const blocks = await db.notes.where({category: NoteCategory.Block,parent: payload.openid}).toArray();
            commit("updateNotes", blocks);
            let comments:Comment[] = [];
            const comments2 = await db.notes.where({category: NoteCategory.Comment,parent: payload.openid}).toArray();
            comments = comments.concat(comments2);
            for(const i in blocks){
                const comments2 = await db.notes.where({category: NoteCategory.Comment,parent: blocks[i].openid}).toArray();
                comments = comments.concat(comments2);
            }
            commit("updateNotes", comments);
        })
    }
  }
};

export { notes };
