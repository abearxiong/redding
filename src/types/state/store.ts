/*
 * @Author: xion
 * @Date: 2020-08-29 08:26:54
 * @LastEditors: xion
 * @LastEditTime: 2020-09-01 11:24:36
 * @FilePath: \redding\src\types\state\store.ts
 * @Description: 真是太开心了
 */
interface Reload {
    (): any;
}
interface StoreState {
    reload: Reload,
    online: boolean,
    [propName: string]: any;
}
interface SearchFunc {
    (source: string, subString: string): boolean;
  }