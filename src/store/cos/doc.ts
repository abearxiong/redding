/*
 * @Author: xion
 * @Date: 2020-09-02 16:07:23
 * @LastEditors: xion
 * @LastEditTime: 2020-09-02 22:52:21
 * @FilePath: \redding\src\store\cos\doc.ts
 * @Description: 真是太开心了
 */


// SecretId: '*',
// SecretKey: '*',
// Bucket: 'vd-1252152609', /* 必须 */
// Region: 'ap-chengdu',     /* 存储桶所在地域，必须字段 */

export const CosKey:{[key: string]: MyStorage} = {
    SecretId: {
        name: "SecretId",
        value: "",
        introduce: (lang) => {
            switch(lang){
                default: return "腾讯云密钥id"
            }
        }
    },
    SecretKey: {
        name: "SecretKey",
        value: "",
        introduce: (lang) => {
            switch(lang){
                default: return "腾讯云密钥key"
            }
        }
    },
    Bucket: {
        name: "Bucket",
        value: "vd-1252152609",
        introduce: (lang) => {
            switch(lang){
                default: return "腾讯云存储桶名称"
            }
        }
    },
    Region: {
        name: "Region",
        value: "ap-chengdu",
        introduce: (lang) => {
            switch(lang){
                default: return "存储桶所在地域"
            }
        }
    },
}