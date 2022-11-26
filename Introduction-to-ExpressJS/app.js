const express = require("express");

const app = express();
const PORT = process.env.PORT || 4040;

app.get("/about", (req, res) => {
  // res.send(`<h3>About Route is Running 🏺</h3>`);
  res.json({
    message: "I am a json Page",
  });
});

app.get("/help", (req, res) => {
  res.send(`<h3>This is Help Page 🏖️</h3>`);
});

app.get("/", (req, res) => {
  res.send(`<h3>App is Running 🏆</h3>`);
});

app.get("*", (req, res) => {
  res.send(`<h1>404 Page Not Found 💥</h1>`);
});

app.listen(PORT, () => {
  console.log(`App is Running on PORT ${PORT}`);
});

// this is cool
