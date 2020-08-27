// vue.config.js
module.exports = {
    // publicPath: process.env.NODE_ENV === 'production'
    // ? './'
    // : './',
    publicPath: "./",
    devServer: {
        disableHostCheck: true,
        // host: '192.168.3.10',   // 通过ipconfig查看本机IP
        port: 8080,
    }
}