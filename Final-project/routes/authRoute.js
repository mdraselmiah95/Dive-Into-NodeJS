const router = require("express").Router();
const signupValidator = require("../validator/auth/signupValidator");
const loginValidator = require("../validator/auth/loginValidator");

const {
  signUpGetController,
  signUpPostController,
  loginGetController,
  loginPostController,
  logoutController,
} = require("../controllers/authController");

router.get("/signup", signUpGetController);
router.post("/signup", signupValidator, signUpPostController);

router.get("/login", loginGetController);
router.post("/login", loginValidator, loginPostController);

router.get("/logout", logoutController);

module.exports = router;
