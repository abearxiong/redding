## 12 腾讯云云开发和cos包

[document](https://docs.cloudbase.net/api-reference/webv2/authentication.html)
```js
import tcb from "@cloudbase/js-sdk";

const tcbApp = tcb.init({
  env: "abear2-198d4c"
});
const auth = tcbApp.auth({persistence: "local"});
console.log("tcbApp", tcbApp,auth);

// 匿名登录
auth.anonymousAuthProvider().signIn().then((res:any)=>console.log("匿名登录成功",res)).catch((err:any)=>console.log("err",err));
//  
// 微信登陆,网页授权,  
// 公众号中服务号才能网页登陆
// 开发者平台创建网站app才能网页登陆
const provider = auth.weixinAuthProvider({
  appid: "wx184f11caee374a89",
  scope: "snsapi_base",
});

```

自定义登录`signInWithEmailAndPassword(email: string, password: string): Promise<LoginState>`

cos对象存储

直接使用开发密钥直接用，推荐使用后端关联配置。使用后端配置，会验证域名请求。

```js
import COS from "cos-js-sdk-v5";
// const cos = new COS({
//     SecretId: 'AKIDPenyxnfo1zDXf4Kn690jJgrnUDQ7uU',
//     SecretKey: '*',
// });

const cos  = new COS({
    // 必选参数
    getAuthorization:  async function (options: any, callback: any) {
        // 服务端 JS 和 PHP 例子：https://github.com/tencentyun/cos-js-sdk-v5/blob/master/server/
        // 服务端其他语言参考 COS STS SDK ：https://github.com/tencentyun/qcloud-cos-sts-sdk
        // STS 详细文档指引看：https://cloud.tencent.com/document/product/436/14048
        await axios('https://redding.xiongxiao.me/sts').then(res=>{
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
```

后端配置，使用云函数获取临时密钥
```js 
'use strict';
var STS = require('qcloud-cos-sts');
var crypto = require('crypto');

exports.main = async (event, context) => {
    // 配置参数
    var config = {
        secretId: "**",
        secretKey: "**",
        proxy: process.env.Proxy,
        durationSeconds: 1800,
        bucket: "vd-1252152609",
        region: "ap-chengdu",
        // 允许操作（上传）的对象前缀，可以根据自己网站的用户登录态判断允许上传的目录，例子： user1/* 或者 * 或者a.jpg
        // 请注意当使用 * 时，可能存在安全风险，详情请参阅：https://cloud.tencent.com/document/product/436/40265
        allowPrefix: '_ALLOW_DIR_/*',
        // 密钥的权限列表
        allowActions: [
            // 所有 action 请看文档 https://cloud.tencent.com/document/product/436/31923
            // 简单上传
            'name/cos:PutObject',
            'name/cos:PostObject',
            // 分片上传
            'name/cos:InitiateMultipartUpload',
            'name/cos:ListMultipartUploads',
            'name/cos:ListParts',
            'name/cos:UploadPart',
            'name/cos:CompleteMultipartUpload'
        ],
    };

    // 获取临时密钥
    var LongBucketName = config.bucket;
    var ShortBucketName = LongBucketName.substr(0, LongBucketName.lastIndexOf('-'));
    var AppId = LongBucketName.substr(LongBucketName.lastIndexOf('-') + 1);
    var policy = {
        'version': '2.0',
        'statement': [{
            'action': config.allowActions,
            'effect': 'allow',
            'resource': [
                'qcs::cos:' + config.region + ':uid/' + AppId + ':prefix//' + AppId + '/' + ShortBucketName + '/' + config.allowPrefix,
            ],
        }],
    };
    var startTime = Math.round(Date.now() / 1000);
    const getTempkeys = await new Promise((resolve, rejects)=>{
        STS.getCredential({
            secretId: config.secretId,
            secretKey: config.secretKey,
            proxy: config.proxy,
            region: config.region,
            durationSeconds: config.durationSeconds,
            policy: policy,
        }, function (err, tempKeys) {
            if (tempKeys) tempKeys.startTime = startTime;
            console.log("key", tempKeys)
            resolve(err || tempKeys)
        });
    })
    return getTempkeys;
};
```