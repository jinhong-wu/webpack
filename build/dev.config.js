const WebpackMerge = require("webpack-merge");
const baseConfig = require("./base.config");

module.exports = WebpackMerge(baseConfig, {
  devServer: {
    contentBase: "./dist", //服务的哪一个文件夹
    inline: true,
    port: 8081,  // 设置端口
    historyApiFallback: true // router使用history模式时, 所有404请求都会响应 index.html 的内容
  },
});
