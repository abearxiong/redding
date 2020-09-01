/*
 * @Author: xion
 * @Date: 2020-08-24 23:24:11
 * @LastEditors: xion
 * @LastEditTime: 2020-08-29 18:01:35
 * @FilePath: \reding\src\utils\crypto.ts
 * @Description: 真是太开心了
 */
/**
 * 加密和hash
 * md5 32
 * sha1 40
 * sha256 64
 */

import CryptoJS from "crypto-js";
import { getUUID } from "./uuid";
const getHash = (content: string) => {
  return CryptoJS.SHA1(content).toString();
};
const getOpenid = () => {
  return CryptoJS.MD5(getUUID(1) + getUUID(4)).toString();
};
export enum CryptoDoing {
  Encrypt,
  Decrypt
}
export const getRES = (msg:string, flag=CryptoDoing.Encrypt, secret:string="a1b1c1-reding") => {
  if(flag === CryptoDoing.Encrypt){
    return CryptoJS.AES.encrypt(msg, secret).toString();
  }else if(flag === CryptoDoing.Decrypt){
    return CryptoJS.AES.decrypt(msg, secret).toString(CryptoJS.enc.Utf8);
  }
}
console.log("crypto.ts");
console.log("======================");
console.log(getOpenid());
console.log(getOpenid());
console.log(getOpenid());
console.log(getOpenid());
console.log(getOpenid());
console.log(getOpenid());
console.log("======================");

export { getHash, getOpenid };
