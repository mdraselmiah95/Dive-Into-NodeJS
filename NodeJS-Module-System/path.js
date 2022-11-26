// NodeJS Path Module 🦼

const path = require("path");

const myCurrentPath = __filename;

console.log(path.dirname(__dirname));
console.log(path.extname(myCurrentPath));

let pathObj = {
  dir: "usr/local",
  name: "testFile",
  ext: ".js",
};

console.log(path.format(pathObj));

console.log(path.isAbsolute(myCurrentPath));
console.log(path.isAbsolute("./math.js"));

console.log(path.join("user", "local", "rasel", "testFile.js"));

console.log(path.resolve(__dirname, "script", "test.js"));

console.log(path.parse(myCurrentPath));
