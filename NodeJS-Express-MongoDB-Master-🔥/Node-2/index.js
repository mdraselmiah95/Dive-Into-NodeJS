const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

const server = http.createServer((req, res) => {
  console.log(req.url);

  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end(index);
      break;
    case "/api":
      res.setHeader("Content-Type", "Application/json");
      res.end(data);
      break;
    default:
      res.writeHead(404, "NOT FOUND");
      res.end();
  }

  console.log("SERVER IS RUNNING");
});

server.listen(3000);
