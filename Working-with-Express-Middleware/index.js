const express = require("express");
const morgan = require("morgan");

const app = express();

// app.use(morgan("dev"));  => middleware

function customMiddleware(req, res, next) {
  if (req.url === "/help") {
    res.send(`<h2>Sorry 🏂, Accessible only ADMIN 🧑‍🚀</h2>`);
  }
  next();
}

function tinyLogger() {
  return (req, res, next) => {
    console.log(`${req.method} - ${req.url}`);
    next();
  };
}

const middleware = [customMiddleware, tinyLogger()];

app.use(middleware);

const PORT = process.env.PORT || 4040;

app.get("/about", morgan("dev"), (req, res) => {
  res.send(`<h3>This About Page is Running 🔰</h3>`);
});

app.get("/help", (req, res) => {
  res.send(`<h3>This Help Page is Running 🍃</h3>`);
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
