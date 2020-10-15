const path = require("path"); //当前文件路径（path的包）
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  //入口：可以使字符喜欢/数组/对象
  entry: "./src/main.js",
  //出口
  output: {
    path: path.resolve(__dirname, "../dist"), //动态获取绝对路径
    filename: "bundle.js",
    // HtmlWebpackPlugin引入后，打包时都在同一个根目录下，就不用配置publicPath了
    // vue报错：Loading chunk * failed，vue-router路由懒加载出错问题。publicPath改为'/'
    // publicPath改为'/'，表示在引入静态资源时，从根路径开始引入
    publicPath: "/", // publicPath: "dist/"后面涉及到url的东西，都会自动加上dist/
  },
  // 引用的loader
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
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              // 当加载的图片，小于limit时，图片会编译成base64字符串形式
              // 当加载的图片，大于limit时，需要使用file-loader模块进行加载
              limit: 8192,
              // 打包后的图片名字
              // img：文件要打包到的文件夹
              // name: 获取图片原来的名字，放在该位置
              // hash:8：防止图片名称冲突，baoliuhash（保留8位）
              // ext：使用原来图片的扩展名
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "less-loader", // compiles Less to CSS
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/, //exclude：排除
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015"],
            plugins: ["syntax-dynamic-import"],
          },
        },
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
    ],
  },
  // 解决路径之类的问题
  resolve: {
    extensions: [".js", ".css", ".vue"], // 配置后可省略写后缀名
    // 别名
    alias: {
      vue$: "vue/dist/vue.esm.js", // 指定vue运行vue.esm.js（包括compiler）
      "@": path.resolve("src"), // 后面引用文件不用写../，直接写@
    },
  },
  // 插件（已分离）
  plugins: [
    new webpack.BannerPlugin("最终版权归WJH所有"), //webpack自带的BannerPlugin插件
    new HtmlWebpackPlugin({
      template: "index.html", //通过index.html作为模板创建，配置后index.html就不用自己引入script了
    }),
    //   new UglifyjsWebpackPlugin(),
  ],
  // 本地服务器（已分离）
  // devServer: {
  //   contentBase: "./dist",
  //   inline: true,  // 页面实时刷新
  //   port: 8081  // 设置端口
  // },
};
