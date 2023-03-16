const fs = require("fs");
const other = require("./other");

const time1 = performance.now();

// const text = fs.readFileSync("demo.txt", "utf-8");

// console.log(text);

fs.readFile("demo.txt", "utf-8", (error, data) => {
  console.log(data);
});

console.log(other.sum(4, 5), other.diff(10, 6));

const time2 = performance.now();
console.log(time2 - time1);
