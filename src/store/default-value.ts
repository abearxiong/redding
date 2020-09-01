/*
 * @Author: xion
 * @Date: 2020-08-31 20:36:44
 * @LastEditors: xion
 * @LastEditTime: 2020-09-01 17:05:32
 * @FilePath: \redding\src\store\default-value.ts
 * @Description: 真是太开心了
 */
import { Lang } from './notes/doc';

export const DefaultValue:{[key: string]: MyStorage} = {
    DB_IS_INIT: {
        name: "DB_IS_INIT",
        value: 1,
        introduce: ( lang: Lang ) =>{
            switch( lang ) {
                default: return "IndexDB未初始"
            }
        }
    },
    DB_VERSION: {
        name: "DB_VERSION",
        value: 1,
        introduce: ( lang: Lang ) =>{
            switch( lang ) {
                default: return "IndexDB的版本"
            }
        }
    },
    PAGES_IS_FROM_DB: {
        name: "PAGES_IS_FROM",
        value: "DB",
        introduce: ( lang: Lang ) =>{
            switch( lang ) {
                default: return "store数据是否来源IndexDB"
            }
        }
    },
    PAGES_IS_FROM_URL: {
        name: "PAGES_IS_FROM",
        value: "URL",
        introduce: ( lang: Lang ) =>{
            switch( lang ) {
                default: return "store数据是否来源请求"
            }
        }
    },
    LODDINGPAGE: {
        name: "LODDINGPAGE",
        value: "LODDINGPAGE",
        introduce: ( lang: Lang ) =>{
            switch( lang ) {
                default: return "页面加载中";
            }
        }
    }
}
export const DefaultEqual = (value:string, eqv:MyStorage|string) =>{
    if(eqv instanceof String){
        return value === eqv;
    }
    eqv = eqv as MyStorage;
    return value === eqv.value
}