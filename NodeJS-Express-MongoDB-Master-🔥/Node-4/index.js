const fs = require("fs");
const express = require("express");
const morgan = require("morgan");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World 🏛️");
});

// Products

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
