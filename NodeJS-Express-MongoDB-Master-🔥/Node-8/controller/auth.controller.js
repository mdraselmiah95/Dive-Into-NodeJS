const User = require("../model/user.model");
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = jwt.sign({ email: req.body.email }, process.env.KEY);
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
