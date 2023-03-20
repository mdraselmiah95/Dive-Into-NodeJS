const fs = require("fs");
const express = require("express");
const morgan = require("morgan");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

// Route
const productRoute = require("./routes/product.route");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World 🏛️");
});

// TODO: APT ROOT , Base URL, example - google.com/api/v2

// Products
app.use("/api/v1/products", productRoute);

// Create POST/products             C R U D
// Read All Product GET
// DELETE /products/:id
// Read GET /products/:id
// Update PUT /products/:id all update
// Update PATCH /products/:id single item update

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
