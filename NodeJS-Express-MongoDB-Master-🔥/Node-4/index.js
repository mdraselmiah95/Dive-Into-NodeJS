const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = 3000;

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World 🏛️");
});

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
