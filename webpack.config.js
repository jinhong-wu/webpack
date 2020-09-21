const path = require("path"); //当前文件路径（path的包）
module.exports = {
  //入口：可以使字符喜欢/数组/对象
  entry: "./src/main.js",
  //出口
  output: {
    path: path.resolve(__dirname, "dist"), //动态获取路径
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/, //正则表达式，匹配.css文件
        // style-loader 将模块的导出作为样式添加到 DOM 中
        // css-loader只负责将css进行加载
        // (使用多个loader时，从右向左加载)
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015"],
          },
        },
      },
    ],
  },
};
