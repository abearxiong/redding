import { ActionContext } from 'vuex';
/*
 * @Author: xion
 * @Date: 2020-09-02 16:00:27
 * @LastEditors: xion
 * @LastEditTime: 2020-09-02 19:07:46
 * @FilePath: \redding\src\store\cos\index.ts
 * @Description: 真是太开心了
 */
import { getls } from './../../cache/local-storage';
import { CosKey } from './doc';
import COS from "cos-js-sdk-v5";
import { g } from "@/server";
// import axios from "axios";

const initCos = () => {
    const SecretId = getls(CosKey.SecretId);
    const SecretKey = getls(CosKey.SecretId);
    let init;
    if(SecretId&&SecretKey) {
        init = new COS({
            SecretId: SecretId,
            SecretKey: SecretKey,
        }); 
    }else {
        // 本地域名localhost会出现403权限错误
        init = new COS({
            // 鉴权
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
                }).catch(console.log)
            }
        });
    }
}
const myCos = initCos();

type CS = {
    myCos: any
}
type cosContext = ActionContext<CS, StoreState>
const cos = {
    state: {
        myCos: myCos
    },
    getters: {
        cos: (state:CS)=>state,
    },
    mutations: {},
    actions: {
        // 添加文件，查看文件，下载文件，删除文件
        put({ state }:cosContext, payload: any){
            const cos = state.myCos;
            cos
        }
    }
}