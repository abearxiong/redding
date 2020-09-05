/*
 * @Author: xion
 * @Date: 2020-08-28 08:10:04
 * @LastEditors: xion
 * @LastEditTime: 2020-09-05 06:55:51
 * @FilePath: \redding\src\@types\definition.d.ts
 * @Description: 真是太开心了
 */
// definition.d.ts
//
// 声明文件会自动被识别，可以在此为一些没有
// 声明文件的模块编写自己的声明文件
//
interface Window {
    log: any,
    clear: any,
    logHelper: any,
    store?: any,
    smap?: any,
    Vue?: any,
    app?: any,
    test?: any,
    cloudbase?: any,
    cloudApp?: any,
    cloudAuth?: any,
    cloudData?: any,
}
interface Document {
    webkitExitFullscreen: any;
    mozCancelFullScreen: any;
}
interface Console {
    profile(label?: string): void;
    profileEnd(label?: string): void;
}
interface log {
    
}