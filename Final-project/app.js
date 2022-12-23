const express = require("express");
const morgan = require("morgan");

const app = express();

// TODO: Setup View Engine
app.get("view engine", "ejs");
app.set("views", "views");

// TODO: middleware
const middleware = [
  morgan("dev"),
  express.static("public"),
  express.urlencoded({ extended: true }),
  express.json(),
];

app.use(middleware);
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
