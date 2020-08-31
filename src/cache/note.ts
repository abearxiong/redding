/*
 * @Author: xion
 * @Date: 2020-08-31 18:29:38
 * @LastEditors: xion
 * @LastEditTime: 2020-08-31 22:36:46
 * @FilePath: \redding\src\cache\note.ts
 * @Description: 真是太开心了
 */
import Dexie from "dexie";
import { Note } from "@/models";
import { exampleBlocks,examplePages } from '@/models/note/note';
import {DefaultValue as Default} from "@/store/default-value";
import { setls, getls, clearls, removels } from "./local-storage";

class NoteDB extends Dexie {
    public notes: Dexie.Table<Note<any,any>, string>;
    public constructor(){
        super("NoteDB");
        // if(getls(Default.DB_IS_INIT)==='1') {
        //     this.version(Default.DB_VERSION.value as number).stores({notes: "openid,hash,keys,title"})
        //     setls(Default.DB_IS_INIT);
        // }
        this.version(Default.DB_VERSION.value as number).stores({notes: "openid,hash,keys,title,category,type,parent"})
        this.notes = this.table("notes")
    }
}

const db = new NoteDB();
// db.transaction("rw", db.notes, async()=>{
//     const adds = [...exampleBlocks,...examplePages];
//     for(const i in adds){
//         db.notes.add(adds[i]);
//     }
    
// })
// db.transaction("rw", db.notes, async()=>{
//     const update = examplePages[0];
//     update.title = "我是修改的内容";
//     db.notes.update(update,update);
// })
export {
    db
}