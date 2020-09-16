// commonJS
const { add, mul } = require("./js/math.js");

console.log(add(10, 20));
console.log(mul(10, 20));

// ES6
import * as info from "./js/info.js";

console.log(info);

//
require("./css/normal.css");
