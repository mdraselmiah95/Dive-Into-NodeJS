const http = require("http");

const server = http.createServer((req, res) => {
  console.log("SERVER IS RUNNING");
});

server.listen(3000);
