const User = require("../model/user.model");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
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
