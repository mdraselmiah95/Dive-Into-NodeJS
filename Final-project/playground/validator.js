const router = require("express").Router();
const { check, validationResult } = require("express-validator");

router.get("/validator", (req, res, next) => {
  res.render("playground/signup", { title: "Validator Playground" });
});

router.post(
  "/validator",
  [
    check("username")
      .not()
      .isEmpty()
      .isLength({ max: 15 })
      .withMessage(`UserName can not be grater than 15 Character`),
    check("email").isEmail().withMessage("Please Provide a Valid Email 🌴"),
  ],
  (req, res, next) => {
    let error = validationResult(req);
    console.log(error);
    res.render("playground/signup", { title: "Validator Playground" });
  }
);

module.exports = router;
