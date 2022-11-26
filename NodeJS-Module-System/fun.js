// NodeJS File + HTTP Module Fun ⛽

const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  fs.readFile("./index.html", (err, data) => {
    res.write(data);
    res.end();
  });
});

server.listen(4040, () => {
  console.log("Server is Running.");
});
