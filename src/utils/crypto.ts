/** 
 * 加密和hash
 * md5 32
 * sha1 40
 * sha256 64
 */

import CryptoJS from 'crypto-js';
import { getUUID } from './uuid';
const getHash = (content: string)=>{
    return CryptoJS.SHA1(content).toString();
}
const getOpenid = () => {
    return CryptoJS.MD5(getUUID(1)+getUUID(4)).toString();
}
export {
    getHash,
    getOpenid
}