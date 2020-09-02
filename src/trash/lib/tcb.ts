/*
 * @Author: xion
 * @Date: 2020-09-02 22:05:06
 * @LastEditors: xion
 * @LastEditTime: 2020-09-02 22:06:11
 * @FilePath: \redding\src\trash\lib\tcb.ts
 * @Description: 真是太开心了
 */
import tcb from "@cloudbase/js-sdk";

const tcbApp = tcb.init({
  env: "abear2-198d4c"
});
const auth = tcbApp.auth({persistence: "local"});
console.log("tcbApp", tcbApp,auth);

// 匿名登录
// auth.anonymousAuthProvider().signIn().then((res:any)=>console.log("匿名登录成功",res)).catch((err:any)=>console.log("err",err));
// 
// 微信登陆, 
// 公众号中服务号才能网页登陆
// 开发者平台创建网站app才能网页登陆
// const provider = auth.weixinAuthProvider({
//   appid: "wx184f11caee374a89",
//   scope: "snsapi_base",
// });

// provider.getRedirectResult({}).then((loginState) => {
//   if (loginState) {
//     // 登录成功，本地已存在登录态
//   } else {
//     // 未登录，唤起微信登录
//     provider.signInWithRedirect();
//   }
// });

const email = "xiongxiao1012@outlook.com";
const password = "xiongxiao1012";
// auth.signUpWithEmailAndPassword(email, password).then(() => {
//   // 发送验证邮件成功
// });
auth.signInWithEmailAndPassword(email, password).then(()=>{
  console.log("login ok",auth.currentUser);
})


// 微信认证登录方法
// auth.weixinAuthProvider({appid:"wx269b000c6a593637", scope:"snsapi_base"}).signInWithRedirect();

// auth.weixinAuthProvider({appid:"wx184f11caee374a89"}).signInWithRedirect();
// 配置 网页帐号	网页授权获取用户基本信息的回调域名开启
// const provider = auth.weixinAuthProvider({appid:"wx269b000c6a593637", scope:"snsapi_base"})
// provider.getRedirectResult({}).then((loginState:any) => {
//   if (loginState) {
//     // 登录成功，本地已存在登录态
//     console.log(auth.currentUser)
//   } else {
//     // 未登录，唤起微信登录
//     provider.signInWithRedirect();
//   }
// });