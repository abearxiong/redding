/*
 * @Author: xion
 * @Date: 2020-08-26 12:24:11
 * @LastEditors: xion
 * @LastEditTime: 2020-08-29 05:59:21
 * @FilePath: \reding\src\models\page\pair.ts
 * @Description: 真是太开心了
 */
class Pair implements IPair {
  name: string;
  value: string;
  constructor(name = "", value = "") {
    this.name = name;
    this.value = value;
  }
}
export { Pair };
