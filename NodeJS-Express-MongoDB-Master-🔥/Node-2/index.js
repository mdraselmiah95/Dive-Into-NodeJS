const http = require("http");
const fs = require("fs");

// const index = fs.readFileSync("index.html", "utf-8");
const index = fs.readFileSync("data.json", "utf-8");

const data = { age: 24 };
const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log("SERVER IS RUNNING");
  res.setHeader("Content-Type", "Application/json");
  //   res.setHeader("Content-Type", "text/html");
  res.end(index);
});

server.listen(3000);
