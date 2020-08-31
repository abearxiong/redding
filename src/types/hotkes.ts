/*
 * @Author: xion
 * @Date: 2020-08-29 06:14:44
 * @LastEditors: xion
 * @LastEditTime: 2020-08-31 20:25:07
 * @FilePath: \redding\src\types\hotkes.ts
 * @Description: 真是太开心了
 */

// 热键对应的函数
interface HotKeyFun {
  (name: string): void;
}
interface HotkeysOptions {
  // 按键选项的区域
  scope: string;
  // 按键选项的元素
  element?: HTMLElement;
  // 按键是否监听弹起
  keyup?: boolean;
  // 按键是否监听按下
  keydown?: boolean;
  // 分割key，默认+
  splitKey?: string;
}
interface ActionsFun<T> {
  // 按键自定义
  custom?: boolean;
  // 监听的函数 ||
  // 按键的自定函数
  func?: string;
  // 热键绑定介绍
  introduce?: string,
  // 按键的内容
  keys: string;
  // 按键的命名
  name: string;
  // 范围和类别
  options: HotkeysOptions;
  // 函数的参数
  params: any,
  preventDefault?: boolean,
  // 热键绑定标题
  title: string,
  status: T,
}