const router = require("express").Router();
const signupValidator = require("../validator/auth/signupValidator");

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
router.post("/login", loginPostController);

router.get("/logout", logoutController);

module.exports = router;
