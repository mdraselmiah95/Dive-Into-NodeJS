const Product = require("../model/product.model");

exports.createProduct = async (req, res) => {
  try {
    const result = await Product.create(req.body);
    res.status(200).json({
      status: "Success",
      message: "Successfully Create the Product 🥈",
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

exports.getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: "Couldn't find the Product.",
    });
  }
};

exports.replaceProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await Product.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      data: doc,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: "Couldn't Replace the Product.",
    });
  }
};

// exports.updateProductById = (req, res) => {
//   const id = +req.params.id;
//   const productIndex = products.findIndex((p) => p.id === id);
//   products.splice(productIndex, 1, { ...req.body, id });
//   res.status(200).json();
// };

exports.updateSingleProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: "Couldn't Replace the Product.",
    });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Product.deleteOne({ _id: id });
    if (!result.deletedCount) {
      return res.status(400).json({
        status: "fail",
        error: "Could't delete the product",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Successfully Deleted the Product 🥈",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Couldn't not Deleted the product.",
      error: error.message,
    });
  }
};
