const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));
const PORT = process.env.PORT || 4040;

app.get("/about", (req, res) => {
  res.send(`<h3>This About Page is Running 🔰</h3>`);
});

app.get("/", (req, res) => {
  res.send("Server is Running 🦦");
});

app.listen(PORT, () => {
  console.log(`App is Running on PORT ${PORT}`);
});
