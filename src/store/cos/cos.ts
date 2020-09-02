/*
 * @Author: xion
 * @Date: 2020-09-02 15:57:19
 * @LastEditors: xion
 * @LastEditTime: 2020-09-02 17:57:03
 * @FilePath: \redding\src\store\cos\cos.ts
 * @Description: 真是太开心了
 */
// cos使用介绍
import COS from "cos-js-sdk-v5";
import { g } from "@/server";

// const cos = new COS({
//     SecretId: 'AKIDPenyxnfo1zkDXf4Kn690jJgrnUyDQ7uU',
//     SecretKey: '*',
// });

const cos  = new COS({
    // 必选参数
    getAuthorization:  async function (options: any, callback: any) {
        // 服务端 JS 和 PHP 例子：https://github.com/tencentyun/cos-js-sdk-v5/blob/master/server/
        // 服务端其他语言参考 COS STS SDK ：https://github.com/tencentyun/qcloud-cos-sts-sdk
        // STS 详细文档指引看：https://cloud.tencent.com/document/product/436/14048
        await g('https://redding.xiongxiao.me/sts').then(res=>{
            const data = res.data;
            const credentials = data && data.credentials;
            console.log("get authorization",data);
            if (!data || !credentials) return console.error('credentials invalid');
            callback({
                TmpSecretId: credentials.tmpSecretId,
                TmpSecretKey: credentials.tmpSecretKey,
                XCosSecurityToken: credentials.sessionToken,
                // 建议返回服务器时间作为签名的开始时间，避免用户浏览器本地时间偏差过大导致签名错误
                StartTime: data.startTime, // 时间戳，单位秒，如：1580000000
                ExpiredTime: data.expiredTime, // 时间戳，单位秒，如：1580000900
            });
            console.log("sts", data)
        }).catch(console.log)
    }
});
console.log("cos", cos)
cos.putObject({
    Bucket: 'vd-1252152609', /* 必须 */
    Region: 'ap-chengdu',     /* 存储桶所在地域，必须字段 */
    Key: 'exampleobject/test1',              /* 必须 */
    StorageClass: 'STANDARD',
    Body: "我的文件对象", // 上传文件对象
    onProgress: function(progressData: any) {
        console.log(JSON.stringify(progressData));
    }
}, function(err: any, data: any) {
    console.log(err || data);
    // params body format error, Only allow File|Blob|String.
});

export {
    cos
}