/*
 * @Author: xion
 * @Date: 2020-08-29 08:26:54
 * @LastEditors: xion
 * @LastEditTime: 2020-08-31 20:28:37
 * @FilePath: \redding\src\types\state\store.ts
 * @Description: 真是太开心了
 */
interface StoreState {
    online: boolean,
    [propName: string]: any;
}