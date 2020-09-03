/*
 * @Author: xion
 * @Date: 2020-08-28 23:07:47
 * @LastEditors: xion
 * @LastEditTime: 2020-09-03 11:08:42
 * @FilePath: \redding\src\types\object.ts
 * @Description: 真是太开心了
 */
interface SimpleKeyValueObject {
    [key:string]: string
} 
interface DocHelp{
    name: any,
    introduce: any,
    style?: any
}
declare module 'cos-js-sdk-v5';