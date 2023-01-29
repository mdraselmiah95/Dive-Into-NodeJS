const bcrypt = require("bcrypt");
const User = require("../models/User");
const { validationResult } = require("express-validator");
const errorFormatter = require("../utils/validationErrorFormatter");

exports.signUpGetController = (req, res, next) => {
  res.render("pages/auth/signup", {
    title: "Create A New Account",
    error: {},
    value: {},
  });
};

exports.signUpPostController = async (req, res, next) => {
  let { username, email, password, confirmPassword } = req.body;

  let errors = validationResult(req).formatWith(errorFormatter);
  if (!errors.isEmpty()) {
    return res.render("pages/auth/signup", {
      title: "Create A New Account",
      error: errors.mapped(),
      value: {
        username,
        email,
        password,
      },
    });
  }

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
exports.loginPostController = async (req, res, next) => {
  let { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.json({
        message: "Invalid Credential",
      });
    }

    let match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.json({
        message: "Invalid Credential",
      });
    }

    console.log("Successfully Login", user);
    res.render("pages/auth/login", { title: "Login To Your Account" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.logoutController = (req, res, next) => {};

//* Front End Validation
//* Backend Validation
//* Database Validation
