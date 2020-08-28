/*
 * @Author: xion
 * @Date: 2020-08-28 09:26:42
 * @LastEditors: xion
 * @LastEditTime: 2020-08-29 01:10:23
 * @FilePath: \reding\src\types\models\note-data.ts
 * @Description: 真是太开心了
 */


/**
 * createTime，updateTime
 * id, share, app,
 * 为服务器内容
 * 
 */
interface INoteData<T,S,C> extends IBaseData{
    // 数据的大类别
    category: C,
    // 数据创建时间
    created: number,
    // 数据的哈希值
    hash?: string,
    // 数据的关键字
    keys: string[],
    // 页面数据设置
    setting?: any,
    // 数据保存状态
    status: S
    // 数据标签汇总
    tags: string[],
    // 数据的标题
    title: string,
    // 数据的小类别
    type: T,
    // 数据更新时间
    updated: number,
}

abstract class NoteData<V,T,S,C> extends BaseData<V> implements INoteData<T,S,C>{
    category: C;
    created: number;
    hash: string;
    keys: string[];
    setting: any;
    status: S;
    tags: string[];
    title: string;
    type: T;
    updated: number;
    public constructor(notedata: any){
        super(notedata)
        const { category,created, hash, keys, setting, status,tags, title, type, updated} = notedata;
        this.category = category;
        this.created = created??0;
        this.hash = hash??"";
        this.keys = keys??[];
        this.setting = setting??"";
        this.status = status;
        this.tags = tags??[];
        this.title = title??"";
        this.type = type;
        this.updated = updated??0;
    }
    protected abstract setHash():void;
    public abstract update(note: NoteData<V,T,S,C>):this;
}
