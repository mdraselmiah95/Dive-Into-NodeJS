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

const createProduct = (req, res) => {
  products.push(req.body);
  res.send({ message: "Data inserted Successfully" });
};

const getAllProduct = (req, res) => {
  res.json(products);
};

const getProductById = (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  res.json(product);
};

const updateProductById = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id });
  res.status(200).json();
};

const updateSingleProductById = (req, res) => {
  const id = +req.params.id;
  const index = products.findIndex((p) => p.id === id);
  const product = products[index];
  products.splice(index, 1, { ...product, ...req.body });
  res.status(200).json();
};

const deleteProduct = (req, res) => {
  const id = +req.params.id;
  const index = products.findIndex((p) => p.id === id);
  const product = products[index];
  products.splice(index, 1);
  res.status(200).json(product);
};

// Products

// Create POST/products             C R U D
app.post("/products", createProduct);

// Read All Product GET
app.get("/products", getAllProduct);

// Read GET /products/:id
app.get("/products/:id", getProductById);

// Update PUT /products/:id all update
app.put("/products/:id", updateProductById);

// Update PATCH /products/:id single item update
app.patch("/products/:id", updateSingleProductById);

// DELETE /products/:id
app.delete("/products/:id", deleteProduct);

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
