const express = require("express");
const router = express.Router();
const authController = require("../controller/auth.controller");

router.route("/").post(authController.signUp);

module.exports = router;
