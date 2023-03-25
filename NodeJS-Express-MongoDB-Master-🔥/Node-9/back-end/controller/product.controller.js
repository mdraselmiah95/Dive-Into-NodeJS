const Product = require("../model/product.model");
const ejs = require("ejs");
const path = require("path");

//Views

exports.getAllProductsSSR = async (req, res) => {
  const products = await Product.find();
  ejs.renderFile(
    path.resolve(__dirname, "../pages/index.ejs"),
    { products: products },
    function (err, str) {
      res.send(str);
    }
  );
};

exports.getAddForm = async (req, res) => {
  ejs.renderFile(
    path.resolve(__dirname, "../pages/add.ejs"),
    function (err, str) {
      res.send(str);
    }
  );
};

exports.createProduct = async (req, res) => {
  try {
    const result = await Product.create(req.body);
    res.status(200).json({
      status: "Success",
      data: result,
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
    let query = Product.find();
    console.log(query);
    if (req.query) {
      const products = await query.sort(req.query).exec();
      res.status(200).json({
        status: "Success",
        data: products,
      });
    } else {
      const products = await query.exec();
      res.status(200).json({
        status: "Success",
        data: products,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: "Couldn't Get the Products",
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
