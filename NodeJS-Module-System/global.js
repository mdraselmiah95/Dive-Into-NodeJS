// What is Global Object 🥈

const math = require("./math");

console.log(math.add(3, 7));
// console.log(math);

console.log("Hello World");

setTimeout(() => {
  console.log("I am SetTimeOut.");
}, 2000);

console.log(__dirname);
console.log(__filename);

var a = 10;
function test() {
  console.log("I am test.");
}

//console.log(global.a);
console.log(module);
