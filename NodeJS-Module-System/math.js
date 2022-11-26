const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;

const test = (a, b) => add(a, b) / sub(a, b);

module.exports = test;

console.log(module);
