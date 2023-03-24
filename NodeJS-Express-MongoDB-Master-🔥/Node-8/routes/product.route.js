const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller");

//SSR
router.route("/ssr").get(productController.getAllProductsSSR);

router.route("/add").get(productController.getAddForm);

router
  .route("/")
  .post(productController.createProduct)
  .get(productController.getAllProduct);

router
  .route("/:id")
  .get(productController.getProductById)
  .put(productController.replaceProduct)
  .patch(productController.updateSingleProductById)
  .delete(productController.deleteProduct);
//   .put(productController.updateProductById)

module.exports = router;
