const fs = require("fs");
const express = require("express");
const morgan = require("morgan");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const productController = require("./controller/product");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World 🏛️");
});

// TODO: APT ROOT , Base URL, example - google.com/api/v2

// Products

// Create POST/products             C R U D
app.post("/products", productController.createProduct);

// Read All Product GET
app.get("/products", productController.getAllProduct);

// Read GET /products/:id
app.get("/products/:id", productController.getProductById);

// Update PUT /products/:id all update
app.put("/products/:id", productController.updateProductById);

// Update PATCH /products/:id single item update
app.patch("/products/:id", productController.updateSingleProductById);

// DELETE /products/:id
app.delete("/products/:id", productController.deleteProduct);

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
