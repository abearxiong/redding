import { getOpenid } from '@/utils';
/*
 * @Author: xion
 * @Date: 2020-08-28 22:41:57
 * @LastEditors: xion
 * @LastEditTime: 2020-09-01 14:27:17
 * @FilePath: \redding\src\models\note\note.ts
 * @Description: 真是太开心了
 */
import { getTimestamp } from '@/utils';
import { getHash } from '@/utils';

export enum NoteCategory {
    Page=0,
    Block,
    Comment
}
/**
 * 笔记保存，更新状态
 */
export enum NoteStatus {
    // 正常
    Working=10,
    // 更新到服务器
    Save,
    // 笔记改变未更新
    // 到服务器
    Add,
    Changing,
    // 笔记本地删除
    Deleting,
}
export enum NoteType {}
export enum PageType {
    Page = 100,
    CodeFile
}
/**
 * Block
 * DataType
 */
export enum BlockType {
    // Api,
    // Attach是附件
    // 通过名字进行
    // 判断附件类别
    Attach = 200,
    Audio,
    Bookmark,
    Code,
    // 公式
    Formula, 
    Markdown,
    PageLink,
    Picture,
    SplitLine,
    Text,
    Video,
}
console.log(BlockType.Markdown, BlockType,'blocktype')

export enum CommentType {
    // Comment关联 Page
    Page=300,
    Block,
    Comment
}

/**
 * V 是 value的类型
 * 6个属性
 */
abstract class BaseData<V>{
    public deep: number;
    public guide: number;
    public hasNext: boolean;
    public openid: string;
    public parent: string | number;
    public value: V;
    public constructor({deep,guide, hasNext,openid,parent,value}: any) {
        this.deep = deep??0;
        this.guide = guide??0;
        this.hasNext = hasNext??false;
        this.openid = openid??"";
        this.parent = parent??"";
        this.value = value;
    }
    public abstract copy():any;
    // 转JSON的数据
    public abstract toJson():any;
    // 获取他字符串
    public abstract toString():string;
    // 更新当前对象
    public abstract update(data: any):this;
    public abstract newOpenid():this;
}

// 10个属性
export abstract class NoteData<V> extends BaseData<V>{
    category: number;
    created: number;
    hash: string;
    keys: string[];
    setting: any;
    status: number;
    tags: string[];
    title: string;
    type: number;
    updated: number;
    public constructor(notedata: any={}){
        super(notedata)
        const { category,created, hash, keys, setting, status,tags, title, type, updated} = notedata;
        this.category = category??0;
        this.created = created??0;
        this.hash = hash??"";
        this.keys = keys??[];
        this.setting = setting??"";
        this.status = status??NoteStatus.Working;
        this.tags = tags??[];
        this.title = title??"";
        this.type = type??0;
        this.updated = updated??0;
    }
    protected abstract setHash():void;
    public abstract update(note: any):this;
}

export class Note<V=any> extends NoteData<V>{
    public constructor(note: any){
        super(note)
        const { created, updated, openid } = note;
        this.openid = openid?? getOpenid();
        // debugger;
        this.created = created??getTimestamp();
        this.updated = updated??getTimestamp();
    }
    public setHash(): void {
        const note = this.copy();
        // hash的值不绑定
        note.hash = "";
        // 本地状态不绑定
        note.status = NoteStatus.Working;
        this.hash = getHash(note.toString());
    }
    public copy(): Note {
        return new Note(this.toJson());
    }
    public toJson(): any {
        // return Object.assign({}, data);
        // return {...this};
        return JSON.parse(JSON.stringify(this))
    }
    public toString(): string {
        return JSON.stringify(this.toJson());
    }
    public update(note: any): this {
        // 更新的BaseData的数据
        const { deep, guide, hasNext, openid, parent, value} = note;
        this.deep = deep??this.deep;
        this.guide = guide??this.guide;
        this.hasNext = hasNext??this.hasNext;
        this.openid = openid??this.openid;
        this.parent = parent??this.parent;
        this.value = value??this.value;
        const { category,created, hash, keys, setting, status,tags, title, type, updated} = note;
        this.category = category??this.category;
        this.created = created??this.created;
        this.hash = hash??this.hash;
        this.keys = keys??this.keys;
        this.setting = setting??this.setting;
        this.status = status??this.status;
        this.tags = tags??this.tags;
        this.title = title??this.title;
        this.type = type??this.type;
        this.updated = updated??getTimestamp();
        // 更新完成后 对数据进行hash
        this.setHash();
        return this;
    }
    public updateTime(){
        this.status =  NoteStatus.Changing;
        this.updated = getTimestamp();
        this.setHash();
    }
    public newOpenid(): this{
        this.openid = getOpenid();
        return this;
    }
}
export class Page extends Note<any>{
    public constructor(note: any){
        super(note)
        this.category = NoteCategory.Page;
    }
    public setArrHash(arr:string[]) {
        this.updateTime();
        this.hash = getHash(arr.join(""));
    }
}
export class Block extends Note<any>{
    public constructor(note: any){
        super(note)
        this.category = NoteCategory.Block;
    }
}
export class Comment extends Note<any>{
    public constructor(note: any){
        super(note)
        this.category = NoteCategory.Comment;
    }
}

const examplePage = new Page({
    "created": 1598281553555,
    "updated": 1598281553555,
    "openid": "6aca077736553e8df3024ea2999199c5",
    "title": "开发计划",
    "deep": 1
})
const examplePage2 = new Page(
    {
        "created": 1598281553486,
        "updated": 1598281553486,
        "openid": "21cd06577c000b6d945112a8c8c148cf",
        "title": "redding目的",
        "deep": 1
    })
export const examplePages = [examplePage, examplePage2];

const exampleBlock = new Block({
    "index": 0,
    "category": "markdown",
    "type": 205,
    "openid": "bea3dd51d32aafdb4dbd4fd9025fc3ca",
    "parent": "6aca077736553e8df3024ea2999199c5",
    "value":
    "### 数据模型\n\n```\ninterface PageDataInterface {\n  openid: string; // openid 生成\n  id?: number; // id定位\n\n  index: number; // 本地索引定位\n  guide: number; // 存放guide\n\n  key?: string; // key的值，关键字\n  tags?: Array<string>; // 标签\n  title: string; //block具有的title\n  value: any; // 值， 如果type类型为Object或者Array 则为空\n  parent?: string; // 关系openid\n  deep?: number; // 深度\n  hasNext: boolean; // 是否还有子节点\n\n  type: number | string; // 类型 page 1 block 2 comment 3\n  category?: string | number; // 分类，\n\n  hash: string; // 内容hash\n\n  share: boolean; // 是否分享\n\n  created: number;\n  updated: number;\n\n  setting: any; // 设置\n  app: number; // redding=1\n}\n```\n",
    "hash": "2066ebaccb994ed845b1c98046ffa8a1a8edaf49",
    "created": 1598281553486,
    "updated": 1598281553486,
    "setting": {
      "showEdit": true,
      "previewCanEdit": true
    }
})
const exampleBlock2 = new Block(     {
    "index": 0,
    "category": "markdown",
    "type": 205,
    "openid": "45a7da0b0d4a20da3479cbddff52e30a",
    "parent": "21cd06577c000b6d945112a8c8c148cf",
    "value":
    "## redding目的\n\n              借鉴\n              \n              - [notion](https://www.notion.so/)\n              - [wolai](www.wolai.com)\n              - [evernote](evernote.com/)\n              \n              等一系列的笔记，想来实现一个存于*浏览器*的笔记。\n              \n              目的：一切皆为自定义话的进行保存自己的笔记的内容。\n              \n              数据格式： 以节点为单位，树形为结构。\n              \n              vue + typescript + vuex\n              \n              利用一些其他的开源代码，监听键盘，管理样式  \n              ，管理函数，动态管理模块，开放化自己的数据  \n              管理层次，开放化网页的利用性。\n              \n              想以*new Function()*的形式进行在浏览器端运   \n              行代码，以至于，可以人为的自定义自己的这个网站。\n              \n              以前端来操作的东西，都一单页应用浏览器来进行   \n              操作，网页存在多姿多彩的，而思考以自定义化的   \n              方式进行保存那些网页的内容到自己的网页中，然 \n              后导出，导入。\n              \n              我想以vscode的编辑代码类型的方式来作为一个网  \n              页的笔记模块，亦或者数据模块。命令行，插件，  \n              快捷键，文件目录。而网页本身又可以做到图片，  \n              画图，3d，动画，游戏，可反馈操作，动态编辑元  \n              素，源码共享等等。\n              \n              ",
    "hash": "2066ebaccb994ed845b1c98046ffa8a1a8edaf49",
    "created": 1598281553486,
    "updated": 1598281553486,
    "setting": {
      "showEdit": true,
      "previewCanEdit": true
    }
})
export const exampleBlocks = [exampleBlock, exampleBlock2]
