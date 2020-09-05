/*
 * @Author: xion
 * @Date: 2020-08-31 18:29:38
 * @LastEditors: xion
 * @LastEditTime: 2020-09-03 21:45:09
 * @FilePath: \redding\src\cache\note.ts
 * @Description: 真是太开心了
 */
import Dexie from "dexie";
import { Note,Page, Block } from "@/models";
import { exampleBlocks,examplePages } from '@/models/note/note';
import { eblocks, epages } from "@/expample";

import {DefaultValue as Default} from "@/store/default-value";
import { setls, getls, clearls, removels } from "./local-storage";

class NoteDB extends Dexie {
    public notes: Dexie.Table<Note<any>, string>;
    public constructor(){
        super("NoteDB");
        // if(getls(Default.DB_IS_INIT)==='1') {
        //     this.version(Default.DB_VERSION.value as number).stores({notes: "openid,hash,keys,title"})
        //     setls(Default.DB_IS_INIT);
        // }
        this.version(Default.DB_VERSION.value as number).stores({notes: "openid,created,updated,hash,keys,title,category,type,parent"})
        this.notes = this.table("notes")
        console.log("version", Default.DB_VERSION.value)
    }
}

const db = new NoteDB();
const DB_IS_INIT = localStorage.getItem(Default.DB_IS_INIT.name)
if(!DB_IS_INIT){
    db.transaction("rw", db.notes, async()=>{
        // const adds = [...exampleBlocks,...examplePages];
        const adds = [...epages.map((item: any)=>new Page(item)), ...eblocks.map((item:any)=>new Block(item))];
        // for(const i in adds){
        //     db.notes.add(adds[i]);
        // }
        db.notes.bulkAdd(adds);
    }).catch(e => {
        alert(e.stack || e);
    })
    setls(Default.DB_IS_INIT)
}

// db.transaction("rw", db.notes, async()=>{
//     const update = examplePages[0];
//     update.title = "我是修改的内容1";
//     db.notes.update(update,update);
// })

export {
    db
}