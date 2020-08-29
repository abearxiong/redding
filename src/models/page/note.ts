/*
 * @Author: xion
 * @Date: 2020-08-28 22:41:57
 * @LastEditors: xion
 * @LastEditTime: 2020-08-29 05:53:26
 * @FilePath: \reding\src\models\page\note.ts
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
    Working=10,
    Save,
    Offline,
    Changing,
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

export enum CommentType {
    // Comment关联 Page
    Page=300,
    Block,
    Comment
}

type INote = Note<any, NoteType, NoteCategory, NoteStatus>
// type INote = NoteData<any, NoteType, NoteCategory, NoteStatus>
/**
 * V 是 value的类型
 */
export class Note<V=any, T=NoteType, C=NoteCategory,S=NoteStatus> extends NoteData<V,T,S,C>{
    public constructor(note: any){
        super(note)
        const { created, updated } = note;
        this.created = created??getTimestamp();
        this.updated = updated??getTimestamp();
    }
    public setHash(): void {
        const note = this.copy();
        note.hash = "";
        this.hash = getHash(note.toString());
    }
    public copy(): Note {
        return new Note(this.toJson());
    }
    public toJson(): any {
        // return Object.assign({}, data);
        return {...this};
    }
    public toString(): string {
        return JSON.stringify(this.toJson());
    }
    public update(note: NoteData<V, T, S, C>): this {
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
}
export class Page extends Note<any,PageType>{
    public constructor(note: Page){
        super(note)
        this.category = NoteCategory.Page;
    }
}
export class Block extends Note<any,BlockType>{
    public constructor(note: Block){
        super(note)
        this.category = NoteCategory.Block;
    }
}
export class Commnet extends Note<any, CommentType>{
    public constructor(note: Comment){
        super(note)
        this.category = NoteCategory.Comment;
    }
}