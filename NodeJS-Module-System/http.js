// NodeJS HTTP Module ㊙️

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.end("<h2>Hello NodeJS. 🚷</h2>");
});

server.listen(4040, () => {
  console.log("Server is Running PORT 4040");
});
