/*
 * @Author: xion
 * @Date: 2020-08-29 08:26:54
 * @LastEditors: xion
 * @LastEditTime: 2020-08-29 08:36:44
 * @FilePath: \reding\src\types\state\store.ts
 * @Description: 真是太开心了
 */
interface IStoreState {
    online: boolean,
    [propName: string]: any;
}