/*
 * @Author: xion
 * @Date: 2020-08-23 03:57:24
 * @LastEditors: xion
 * @LastEditTime: 2020-08-30 21:54:41
 * @FilePath: \redding\vue.config.js
 * @Description: 真是太开心了
 */
// vue.config.js
module.exports = {
    // publicPath: process.env.NODE_ENV === 'production'
    // ? './'
    // : './',
    publicPath: "./",
    configureWebpack: {
        resolve: {
          alias: {
            // 'vue': 'vue/dist/vue.esm-bundler.js'
          }
        }
    },
    devServer: {
        disableHostCheck: true,
        // host: '192.168.3.10',   // 通过ipconfig查看本机IP
        port: 8080,
    }
}