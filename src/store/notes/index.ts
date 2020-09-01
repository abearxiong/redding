
/*
 * @Author: xion
 * @Date: 2020-08-30 23:16:56
 * @LastEditors: xion
 * @LastEditTime: 2020-09-01 17:07:56
 * @FilePath: \redding\src\store\notes\index.ts
 * @Description: 真是太开心了
 */
/** 
 * 页面的内容
 *  Note当中，只有pages需要保持到浏览器
 *  而blocks和comments是不许要保存到浏
 *  览器当中的
 */
import { block } from "./block";
// import { comment } from "./comment";
import { page } from "./page";
import { NoteCategory,Page,Block,Comment,Note } from "@/models";
import { exampleBlocks, examplePages, NoteStatus } from './../../models/note/note';
import { db } from "@/cache";
import { ActionContext } from 'vuex';
import { DefaultEqual, DefaultValue } from "../default-value";
import { setls, getls, removels } from "@/cache";
interface NoteState {
    pages: Page[],
    blocks: Block[],
    comments: Comment[]
}
type NoteContext = ActionContext<NoteState, StoreState>
 
const noteState: NoteState = {
  pages: [],
  blocks: [],
  comments: []
};
type NC = NoteCategory;
type NS = NoteState;
const notes = {
  state: ()=>noteState,
  getters: {
    ...page.getters,
    ...block.getters,
    // ...comment.getters
      notes: (state: NoteState)=>state,
      getPages: (state: NoteState)=>state.pages,
      getBlocks: (state: NoteState) => (openid: string)=>state.blocks.filter(item=>item.parent===openid),
      getPage: (state: NoteState) => (openid: string) => state.pages.find(item=>item.openid==openid)??{title:"未加载"},

  },
  mutations: {
    ...page.mutations,
    ...block.mutations,
    // ...comment.mutations
    // 多条笔记操作：设置笔记
    // 单条笔记操作：添加笔记 （删除笔记） 修改笔记 设置笔记
    updateNotes(state: NS, payload: any[]) {
        if(payload.length <= 0)return;
        const category = payload[0].category;
        switch(category){
            case NoteCategory.Page:
                // TODO:
                // 如果本身没有pages 直接赋值进去
                // 如果有pages，那么判断payload来源
                //      1. 来自缓存
                //      2. 来自服务器
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
            default: return;
        };
        
        db.transaction("rw", db.notes, async () => {
            await db.notes.update(payload.toJson(), payload.toJson());
        }).catch(e => {
                alert(e.stack || e);
            })
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
            default: return;
        };
        db.transaction("rw", db.notes, async()=>{
            const pages = await db.notes.add(payload);
        })
    },
    deleteNote(state: NS, payload: Note){
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
            default: return;
        };
        db.transaction("rw", db.notes, async () => {
            payload.update({status: NoteStatus.Deleting});
            db.notes.update(payload.toJson(), payload.toJson());
        })
    },
    clear(state: NS, payload: NoteCategory){
        switch(payload){
            case NoteCategory.Page:
                state.pages = [];break;
            case NoteCategory.Comment:
                state.pages = [];break;
            case NoteCategory.Block:
                state.pages = [];break;
        }
    }
  },
  actions: {
    ...page.actions,
    ...block.actions,
    // ...comment.actions
    initPagesFromCache({commit, dispatch }: NoteContext) {
        db.transaction("rw", db.notes,async()=>{
            const pages = await (await db.notes.where({category: NoteCategory.Page}).sortBy("created")).reverse();
            // console.log("sort,pages",pages)
            commit("updateNotes", pages.map(item=>new Page(item)))
            dispatch("reload",null, {root: true})
            // console.log("init-pages-from-cache")
        })
    },
    initBlocksFromCache({ commit, dispatch}: NoteContext, payload:any) {
        db.transaction("rw", db.notes, async()=>{
            if(payload){
                const blocks = await db.notes.where({category: NoteCategory.Block,parent: payload.openid}).toArray();
                commit("updateNotes", blocks.map(item=>new Block(item)));
                let comments:Comment[] = [];
                const comments2 = await db.notes.where({category: NoteCategory.Comment,parent: payload.openid}).toArray();
                comments = comments.concat(comments2);
                for(const i in blocks){
                    const comments2 = await db.notes.where({category: NoteCategory.Comment,parent: blocks[i].openid}).toArray();
                    comments = comments.concat(comments2);
                }
                commit("updateNotes", comments.map(item=>new Comment(item)));      
            }else{
                const blocks = await db.notes.where({category: NoteCategory.Block}).toArray();
                commit("updateNotes", blocks);
                const comments = await db.notes.where({category: NoteCategory.Comment}).toArray();
                commit("updateNotes", comments);
            }
            dispatch("reload",null, {root: true})
            // console.log("init-blocks-from-cache")
        })
    },
    initPages( { dispatch }: NoteContext, payload: number) {
        dispatch("initPagesFromCache");
        dispatch("initBlocksFromCache");
    },
    clear({ commit }: NoteContext, payload: NoteCategory) {
        commit("clear", payload);
    }
  }
};

export { notes };
