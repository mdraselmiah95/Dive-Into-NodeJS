const express = require("express");
const router = express.Router();
const productController = require("../controller/product");

router
  .route("/")
  .post(productController.createProduct)
  .get(productController.getAllProduct);

router
  .route("/:id")
  .get(productController.getProductById)
  .put(productController.updateProductById)
  .patch(productController.updateSingleProductById)
  .delete(productController.deleteProduct);

module.exports = router;
