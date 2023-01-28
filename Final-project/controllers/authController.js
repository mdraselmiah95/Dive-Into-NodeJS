const bcrypt = require("bcrypt");
const User = require("../models/User");

exports.signUpGetController = (req, res, next) => {
  res.render("pages/auth/signup", { title: "Create A New Account" });
};

exports.signUpPostController = async (req, res, next) => {
  let { username, email, password, confirmPassword } = req.body;

  try {
    let hashedPassword = await bcrypt.hash(password, 11);

    let user = new User({
      username,
      email,
      password: hashedPassword,
    });

    let createUser = await user.save();
    console.log("user created ", createUser);
    res.render("pages/auth/signup", { title: "Create A New Account" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.loginGetController = (req, res, next) => {
  res.render("pages/auth/login", { title: "Login To Your Account" });
};
exports.loginPostController = (req, res, next) => {};

exports.logoutController = (req, res, next) => {};
