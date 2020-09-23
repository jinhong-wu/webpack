const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");
const WebpackMerge = require("webpack-merge");
const baseConfig = require("./base.config");

module.exports = WebpackMerge(baseConfig, {
  // 插件
  plugins: [
    new UglifyjsWebpackPlugin(),
  ],
});
