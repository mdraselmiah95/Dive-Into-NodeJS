const router = require("express").Router();

const {
  signUpGetController,
  signUpPostController,
  loginGetController,
  loginPostController,
  logoutController,
} = require("../controllers/authController");

router.get("/signup", signUpGetController);
router.post("/signup", signUpPostController);

router.get("/login", loginGetController);
router.post("/login", loginPostController);

router.get("/logout", logoutController);

module.exports = router;
