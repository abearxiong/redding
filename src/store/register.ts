/*
 * @Author: xion
 * @Date: 2020-08-30 16:15:58
 * @LastEditors: xion
 * @LastEditTime: 2020-08-30 23:03:11
 * @FilePath: \redding\src\store\register.ts
 * @Description: 真是太开心了
 */
import { Store } from 'vuex';

export const registerModule = (store:Store<any>, module:any) => {
    store.registerModule(module.name,module);
}

