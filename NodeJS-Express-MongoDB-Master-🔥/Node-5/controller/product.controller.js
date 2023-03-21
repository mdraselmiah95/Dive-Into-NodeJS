const Product = require("../model/product.model");

exports.createProduct = async (req, res) => {
  try {
    const result = await Product.create(req.body);
    console.log(result);
    res.status(200).json({
      status: "Success",
      message: "Successfully Create the Product",
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: "Couldn't create the Product",
    });
  }
};

exports.getAllProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({
      status: "Success",
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: "Couldn't create the Product",
    });
  }
};

// exports.getProductById = (req, res) => {
//   const id = +req.params.id;
//   const product = products.find((p) => p.id === id);
//   res.json(product);
// };

// exports.updateProductById = (req, res) => {
//   const id = +req.params.id;
//   const productIndex = products.findIndex((p) => p.id === id);
//   products.splice(productIndex, 1, { ...req.body, id });
//   res.status(200).json();
// };

// exports.updateSingleProductById = (req, res) => {
//   const id = +req.params.id;
//   const index = products.findIndex((p) => p.id === id);
//   const product = products[index];
//   products.splice(index, 1, { ...product, ...req.body });
//   res.status(200).json();
// };

// exports.deleteProduct = (req, res) => {
//   const id = +req.params.id;
//   const index = products.findIndex((p) => p.id === id);
//   const product = products[index];
//   products.splice(index, 1);
//   res.status(200).json(product);
// };
