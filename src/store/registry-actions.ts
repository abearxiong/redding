/*
 * @Author: xion
 * @Date: 2020-08-29 08:17:32
 * @LastEditors: xion
 * @LastEditTime: 2020-08-29 17:48:48
 * @FilePath: \reding\src\store\registry-actions.ts
 * @Description: 真是太开心了
 */
import hotkeys from "hotkeys-js";
import { Store } from 'vuex';

export enum HotkeyStatus {
    NoKey,
    CanBind,
    Bind
}
export type ActionFun = IActionsFun<HotkeyStatus>

class HotkeysOptions implements IHotkeysOptions{
    scope: string;
    element?: HTMLElement;
    keyup?: boolean;
    keydown?: boolean;
    splitKey?: string;
    constructor({scope,element,keyup,keydown,splitKey}:HotkeysOptions={scope:"all"}){
        this.scope=scope??"all";
        this.element=element??undefined;
        this.keyup = keyup??false;
        this.keyup = keydown !== undefined ? keydown : true;
        this.splitKey = splitKey??"+"
    }
}
class AcionFunction implements ActionFun{
    custom = false;
    func: string;
    introduce: string;
    keys: string;
    name: string;
    options: IHotkeysOptions;
    params: any;
    preventDefault?: boolean;
    title: string;
    status: HotkeyStatus;
    constructor({custom, func,introduce,keys,name,options,params,preventDefault,title,status}:ActionFun){
        // todo 
        this.custom = custom??false;
        this.func = func??"";
        this.introduce = introduce??"介绍";
        this.keys = keys??"";
        this.name = name??"";
        this.options = options;
        this.title = title;
        this.status = status;
    }
}
// 自定义函数举例
// new Funcition("params","return params");
const registerActions = (store: Store<any>, actions: IActionsFun<HotkeyStatus>[]) => {
    const hotkeysSetting = actions.map((item)=>{
        if(item.status === HotkeyStatus.Bind){
            if(item.custom) {
                const func =  new Function("params", item.func??"")
                hotkeys(item.keys, item.options, (event, handler)=>{
                    item.preventDefault??event.preventDefault()
                    func(item.params)
                })
            }else{
                hotkeys(item.keys, item.options, (event, handler)=>{
                    item.preventDefault??event.preventDefault()
                    store.dispatch(item.name,item.params)
                })
                return item;
            }
        }else{
            return item;
        }
    })
    store.dispatch("addHotkeys", hotkeysSetting)
}

const unregisterActions = (store:Store<any>, actions: ActionFun[]) =>{
    const hotkeysSetting = actions.map(item=>{
        if(item.status!==HotkeyStatus.Bind)return item;
        hotkeys.unbind(item.keys, item.options?.scope??"all")
        item.status = HotkeyStatus.CanBind;
        return item;
    })
    store.dispatch("updateHotkeys", hotkeysSetting);
}

export {
    registerActions,
    unregisterActions
}