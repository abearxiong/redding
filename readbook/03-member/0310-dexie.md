## 10 dexie

dexie是使用indexdb的一款开源软件。

简化了操作indexdb的过程。

每次更新和获取操作通过事务管理。
[dexie document](https://dexie.org/docs/API-Reference)

```js
import Dexie from "dexie";
import { Note } from "@/models";
import { exampleBlocks,examplePages } from '@/models/note/note';
import {DefaultValue as Default} from "@/store/default-value";
import { setls, getls, clearls, removels } from "./local-storage";

class NoteDB extends Dexie {
    public notes: Dexie.Table<Note<any>, string>;
    public constructor(){
        super("NoteDB");
        this.version(Default.DB_VERSION.value as number).stores({notes: "openid,created,updated,hash,keys,title,category,type,parent"})
        this.notes = this.table("notes")
        console.log("version", Default.DB_VERSION.value)
    }
}

const db = new NoteDB();
const DB_IS_INIT = localStorage.getItem(Default.DB_IS_INIT.name)
// debugger;
if(!DB_IS_INIT){
    db.transaction("rw", db.notes, async()=>{
        const adds = [...exampleBlocks,...examplePages];
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
```
