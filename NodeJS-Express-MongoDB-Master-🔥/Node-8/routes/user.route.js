const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route("/:id")
  .put(userController.replaceUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
