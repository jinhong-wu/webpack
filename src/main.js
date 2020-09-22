// commonJS
// const { add, mul } = require("./js/math.js");
// console.log(add(10, 20));
// console.log(mul(10, 20));

// ES6
// import * as info from "./js/info.js";
// console.log(info);

// 依赖css文件（webpack.config.js配置了相关代码，所以.css可以不写）
// require("./css/normal");

// 依赖less文件
// require("./css/special.less");
// document.writeln("webpack测试");

// 使用Vue
import Vue from "vue";
import App from "./App";
import router from "./router"
new Vue({
  el: "#app", //template中的内容最终会替换el里面的内容
  router,
  template: `<App/> `,
  components: {
    App,
  },
});
// new Vue({
//   render: h => h(App),
//   router
// }).$mount('#app');
