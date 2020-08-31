/*
 * @Author: xion
 * @Date: 2020-08-28 09:26:42
 * @LastEditors: xion
 * @LastEditTime: 2020-08-31 20:24:36
 * @FilePath: \redding\src\types\models\note-data.ts
 * @Description: 真是太开心了
 */


/**
 * createTime，updateTime
 * id, share, app,
 * 为服务器内容
 * 
 */
interface NoteData<T,S,C> extends BaseData{
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

