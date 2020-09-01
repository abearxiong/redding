/*
 * @Author: xion
 * @Date: 2020-08-31 20:20:39
 * @LastEditors: xion
 * @LastEditTime: 2020-09-01 16:27:29
 * @FilePath: \redding\src\types\db\local-storage.ts
 * @Description: 真是太开心了
 */
interface MyStorage {
    name: string,
    value: string|number,
    introduce: (v: any)=>any;
}