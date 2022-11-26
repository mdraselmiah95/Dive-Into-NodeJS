// NodeJS HTTP Module ㊙️

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.end("<h3>Hello NodeJS. 🚷</h3>");
});

server.listen(4040, () => {
  console.log("Server is Running PORT 4040");
});
