exports.signUpGetController = (req, res, next) => {
  res.render("pages/auth/signup", { title: "Create A New Account" });
};
exports.signUpPostController = (req, res, next) => {
  console.log(req.body);
  res.render("pages/auth/signup", { title: "Create A New Account" });
};

exports.loginGetController = (req, res, next) => {};
exports.loginPostController = (req, res, next) => {};

exports.logoutController = (req, res, next) => {};
