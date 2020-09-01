/*
 * @Author: xion
 * @Date: 2020-09-01 15:40:09
 * @LastEditors: xion
 * @LastEditTime: 2020-09-01 16:18:24
 * @FilePath: \redding\src\store\statistics\index.ts
 * @Description: 真是太开心了
 */
import { ActionContext } from "vuex";
import { KeyHandler, HotkeysEvent } from "hotkeys-js";
type StsState = {}
type StsContext = ActionContext<StsState, StoreState>;
type KeyEvent = {
    event: HotkeysEvent,
    handler: KeyHandler
}
const stsState: StsState = {}
const statistics = {
    state: ()=>stsState,
    getters: {},
    mutitions: {},
    actions: {
        hook(stsContext: StsContext, payload: KeyEvent){
            // console.log(payload);
            console.log("key=", payload?.event??" no event", payload?.handler??" no handler")
        }
    },
}
export {
    statistics
}