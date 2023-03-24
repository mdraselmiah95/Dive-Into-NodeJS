const User = require("../model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const { token } = require("morgan");
const privateKey = fs.readFileSync(
  path.resolve(__dirname, "../private.key"),
  "utf-8"
);
exports.signUp = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = jwt.sign({ email: req.body.email }, privateKey, {
      algorithm: "RS256",
    });
    const hash = bcrypt.hashSync(req.body.password, 10);
    user.password = hash;
    user.token = token;
    user.save();
    res.status(200).json({
      status: "Success",
      message: "Successfully User the Product 🥈",
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: "Couldn't create the User",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const doc = await User.findOne({ email: req.body.email });
    const isAuth = bcrypt.compareSync(req.body.password, doc.password);
    if (isAuth) {
      let token = jwt.sign({ email: req.body.email }, privateKey, {
        algorithm: "RS256",
      });
      res.json({ token });
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    res.status(401).json({
      status: "Unauthorized ",
      error: "The server's request was not verified 🔥",
    });
  }
};
