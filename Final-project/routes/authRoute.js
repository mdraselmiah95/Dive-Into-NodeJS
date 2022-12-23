const router = require("express").Router();

const {
  signUpGetController,
  signUpPostController,
  loginGetController,
  loginPostController,
  logoutGetController,
} = require("../controllers/authController");

router.get("/signup", signUpGetController);
router.post("/signup", signUpPostController);

router.get("/login", loginGetController);
router.post("/login", loginPostController);

router.get("/logout", logoutGetController);

module.exports = router;
