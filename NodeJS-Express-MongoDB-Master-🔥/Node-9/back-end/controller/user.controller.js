const User = require("../model/user.model");
const jwt = require("jsonwebtoken");

exports.getAllUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({
      status: "success",
      data: user,
      message: "Successfully Get the User Data.",
    });
  } catch (error) {
    res.status(400).status({
      status: "error",
      error: "Couldn't Get The User Data",
    });
  }
};

exports.getUser = async (req, res) => {
  const id = req.params.id;
  console.log({ id });
  const user = await User.findById(id).populate("cart"); // Populate Cart Products
  res.json(user);
};
exports.replaceUser = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await User.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
exports.updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await User.findOneAndDelete({ _id: id });
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
