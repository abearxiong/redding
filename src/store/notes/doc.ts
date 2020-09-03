/*
 * @Author: xion
 * @Date: 2020-09-01 14:56:35
 * @LastEditors: xion
 * @LastEditTime: 2020-09-03 18:06:54
 * @FilePath: \redding\src\store\notes\doc.ts
 * @Description: 真是太开心了
 */
import { getls, removels } from "@/cache";

export enum Lang {
    ZH= "zh_CN",
}
export const DocPageKey:{[key: string]: MyStorage} = {
    PAGE_CTRL_R: {
        name: "PAGE_CTRL_R",
        value: "ctrl+r",
        introduce: (lang) => {
            switch(lang){
                default: return "刷新组件"
            }
        }
    },
}
export const DocPageHelper: DocHelp = {
    name: (lang="zh") => {
        switch(lang){
            default: return "所有"
        }
        return "all"
    },
    introduce: (lang="zh")=>{
        const intros = ["PAGE_CTRL_R"]
        return intros.map(item=>{
            return {
                name: item,
                hotkey: getls(DocPageKey[item]),
                introduce: DocPageKey[item].introduce(lang)
            }
        })
    },
    style:()=>{
        //
    }
}
// PageIndex
export const DocPageIndexKey:{[key: string]: MyStorage} = {
    PAGE_INDEX_CTRL_F: {
        name: "PAGE_INDEX_CTRL_F",
        value: "ctrl+f",
        introduce: (lang) => {
            switch(lang){
                default: return "<a>搜索框显示</a>"
            }
        }
    },
    PAGE_INDEX_CTRL_A: {
        name: "PAGE_INDEX_CTRL_A",
        value: "ctrl+a",
        introduce: (lang) => {
            switch(lang){
                default: return "新建页面"
            }
        }
    },
    PAGE_INDEX_UP: {
        name: "PAGE_INDEX_UP",
        value: "up",
        introduce: ( lang ) =>{
            switch( lang ) {
                default: return "上一个选项"
            }
        }
    },
    PAGE_INDEX_RIGHT: {
        name: "PAGE_INDEX_RIGHT",
        value: "right",
        introduce: ( lang ) =>{
            switch( lang ) {
                default: return "右面一个选项"
            }
        }
    },
    PAGE_INDEX_DOWN: {
        name: "PAGE_INDEX_DOWN",
        value: "down",
        introduce: ( lang ) =>{
            switch( lang ) {
                default: return "下面一个选项"
            }
        }
    },
    PAGE_INDEX_LEFT: {
        name: "PAGE_INDEX_LEFT",
        value: "left",
        introduce: ( lang ) =>{
            switch( lang ) {
                default: return "左边一个选项"
            }
        }
    },
    PAGE_INDEX_CTRL_LEFT: {
        name: "PAGE_INDEX_CTRL_LEFT",
        value: "ctrl+left",
        introduce: ( lang ) =>{
            switch( lang ) {
                default: return "返回"
            }
        }
    },
    PAGE_INDEX_CTRL_RIGHT: {
        name: "PAGE_INDEX_CTRL_RIGHT",
        value: "ctrl+right",
        introduce: ( lang ) =>{
            switch( lang ) {
                default: return "往前"
            }
        }
    },
}
export const DocPageIndexHelper: DocHelp = {
    name: (lang="zh") => {
        switch(lang){
            default: return "页面索引"
        }
        return "PageIndex"
    },
    introduce: (lang="zh")=>{
        let intros = ["PAGE_INDEX_CTRL_F", "PAGE_INDEX_UP", "PAGE_INDEX_RIGHT", "PAGE_INDEX_DOWN", "PAGE_INDEX_LEFT"]
        intros = intros.concat(["PAGE_INDEX_CTRL_LEFT", "PAGE_INDEX_CTRL_RIGHT"]);
        intros = intros.concat(["RAGE_INDEX_CTRL_A"])
        return intros.map(item=>{
            return {
                name: item,
                hotkey: getls(DocPageIndexKey[item]),
                introduce: DocPageIndexKey[item].introduce(lang)
            }
        })
    },
    style:()=>{
        //
    }
}
// PageBlocks
export const DocPageBlocksKey:{[key: string]: MyStorage} = {
    PAGE_BLOCKS_CTRL_A: {
        name: "PAGE_BLOCKS_CTRL_A",
        value: "ctrl+a",
        introduce: (lang) => {
            switch(lang){
                default: return "新建块"
            }
        }
    },
    PAGE_BLOCKS_UP: {
        name: "PAGE_BLOCKS_UP",
        value: "up",
        introduce: ( lang ) =>{
            switch( lang ) {
                default: return "上一个选项"
            }
        }
    },
    PAGE_BLOCKS_RIGHT: {
        name: "PAGE_BLOCKS_RIGHT",
        value: "right",
        introduce: ( lang ) =>{
            switch( lang ) {
                default: return "右面一个选项"
            }
        }
    },
    PAGE_BLOCKS_DOWN: {
        name: "PAGE_BLOCKS_DOWN",
        value: "down",
        introduce: ( lang ) =>{
            switch( lang ) {
                default: return "下面一个选项"
            }
        }
    },
    PAGE_BLOCKS_LEFT: {
        name: "PAGE_BLOCKS_LEFT",
        value: "left",
        introduce: ( lang ) =>{
            switch( lang ) {
                default: return "左边一个选项"
            }
        }
    },
    PAGE_BLOCKS_CTRL_LEFT: {
        name: "PAGE_BLOCKS_CTRL_LEFT",
        value: "ctrl+left",
        introduce: ( lang ) =>{
            switch( lang ) {
                default: return "返回"
            }
        }
    },
    PAGE_BLOCKS_CTRL_RIGHT: {
        name: "PAGE_BLOCKS_CTRL_RIGHT",
        value: "ctrl+right",
        introduce: ( lang ) =>{
            switch( lang ) {
                default: return "往前"
            }
        }
    },
}
export const DocPageBlocksHelper: DocHelp = {
    name: (lang="zh") => {
        switch(lang){
            default: return "页面块"
        }
        return "PageBlocks"
    },
    introduce: (lang="zh")=>{
        let intros = ["PAGE_BLOCKS_CTRL_A", "PAGE_BLOCKS_UP", "PAGE_BLOCKS_RIGHT", "PAGE_BLOCKS_DOWN", "PAGE_BLOCKS_LEFT"]
        intros = intros.concat(["PAGE_BLOCKS_CTRL_LEFT", "PAGE_BLOCKS_CTRL_RIGHT"]);
        return intros.map(item=>{
            return {
                name: item,
                hotkey: getls(DocPageBlocksKey[item]),
                introduce: DocPageBlocksKey[item].introduce(lang)
            }
        })
    },
    style:()=>{
        //
    }
}
// Markdown
export const DocMarkdownKey:{[key: string]: MyStorage} = {
    MARKDOWN_UP: {
        name: "MARKDOWN_UP",
        value: "up",
        introduce: ( lang ) =>{
            switch( lang ) {
                default: return "向上"
            }
        }
    },
    MARKDOWN_RIGHT: {
        name: "MARKDOWN_RIGHT",
        value: "right",
        introduce: ( lang ) =>{
            switch( lang ) {
                default: return "向右"
            }
        }
    },
    MARKDOWN_DOWN: {
        name: "MARKDOWN_DOWN",
        value: "down",
        introduce: ( lang ) =>{
            switch( lang ) {
                default: return "向下"
            }
        }
    },
    MARKDOWN_LEFT: {
        name: "MARKDOWN_LEFT",
        value: "left",
        introduce: ( lang ) =>{
            switch( lang ) {
                default: return "向左"
            }
        }
    },
    MARKDOWN_CTRL_Q: {
        name: "MARKDOWN_CTRL_Q",
        value: "ctrl+q",
        introduce: ( lang ) =>{
            switch( lang ) {
                default: return "隐藏/显示左边markdown编辑"
            }
        }
    },
    MARKDOWN_CTRL_E: {
        name: "MARKDOWN_CTRL_E",
        value: "ctrl+e",
        introduce: ( lang ) =>{
            switch( lang ) {
                default: return "隐藏/显示右边markdown预览"
            }
        }
    },
    MARKDOWN_CTRL_S: {
        name: "MARKDOWN_CTRL_S",
        value: "ctrl+s",
        introduce: ( lang ) =>{
            switch( lang ) {
                default: return "保存退出"
            }
        }
    },
    MARKDOWN_ESC: {
        name: "MARKDOWN_CTRL_ESC",
        value: "esc",
        introduce: ( lang ) =>{
            switch( lang ) {
                default: return "隐藏/显示左边markdown预览"
            }
        }
    },

}
export const DocMarkdownHelper: DocHelp = {
    name: (lang="zh") => {
        switch(lang){
            default: return "标记语言Markdown"
        }
        return "Markdown"
    },
    introduce: (lang="zh")=>{
        let intros = ["MARKDOWN_UP", "MARKDOWN_RIGHT", "MARKDOWN_DOWN", "MARKDOWN_LEFT"]
        intros = intros.concat(["MARKDOWN_CTRL_Q", "MARKDOWN_CTRL_E", "MARKDOWN_ESC"]);
        intros = intros.concat(["MARKDOWN_CTRL_S" ]);
        return intros.map(item=>{
            return {
                name: item,
                hotkey: getls(DocMarkdownKey[item]),
                introduce: DocMarkdownKey[item].introduce(lang)
            }
        })
    },
    style:()=>{
        //
    }
}
