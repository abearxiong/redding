/*
 * @Author: xion
 * @Date: 2020-08-29 08:17:32
 * @LastEditors: xion
 * @LastEditTime: 2020-08-29 10:03:44
 * @FilePath: \reding\src\store\registry-actions.ts
 * @Description: 真是太开心了
 */
import hotkeys from "hotkeys-js";
import { Store } from 'vuex';
const registerActionsFun  = () =>{

}
export enum HotkeyStatus {
    NoKey,
    CanBind,
    Bind
}
export type ActionFun = IActionsFun<HotkeyStatus>

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