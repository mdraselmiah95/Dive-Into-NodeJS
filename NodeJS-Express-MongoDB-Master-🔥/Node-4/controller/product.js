const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

exports.createProduct = (req, res) => {
  products.push(req.body);
  res.send({ message: "Data inserted Successfully" });
};

exports.getAllProduct = (req, res) => {
  res.json(products);
};

exports.getProductById = (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  res.json(product);
};

exports.updateProductById = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id });
  res.status(200).json();
};

exports.updateSingleProductById = (req, res) => {
  const id = +req.params.id;
  const index = products.findIndex((p) => p.id === id);
  const product = products[index];
  products.splice(index, 1, { ...product, ...req.body });
  res.status(200).json();
};

exports.deleteProduct = (req, res) => {
  const id = +req.params.id;
  const index = products.findIndex((p) => p.id === id);
  const product = products[index];
  products.splice(index, 1);
  res.status(200).json(product);
};
