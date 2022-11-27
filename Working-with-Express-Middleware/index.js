const express = require("express");
const morgan = require("morgan");

const app = express();

// app.use(morgan("dev"));  => middleware

function customMiddleware(req, res, next) {
  console.log("I am Logged 🧘");
  next();
}

app.use(customMiddleware);

const PORT = process.env.PORT || 4040;

app.get("/about", morgan("dev"), (req, res) => {
  res.send(`<h3>This About Page is Running 🔰</h3>`);
});

app.get("/", (req, res) => {
  res.send("Server is Running 🦦");
});

app.get("*", (req, res) => {
  res.send(`404 Page Not Found 💥`);
});

app.listen(PORT, () => {
  console.log(`App is Running on PORT ${PORT}`);
});
