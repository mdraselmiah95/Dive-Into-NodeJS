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

// TODO: APT ROOT , Base URL, example - google.com/api/v2

// Products

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
