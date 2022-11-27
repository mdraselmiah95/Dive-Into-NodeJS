exports.getAllPost = (req, res) => {
  const { category, page, filter } = req.query;
  res.send("Render All Posts 🗳️");
};

exports.getSinglePost = (req, res) => {
  res.send("I am Post " + req.params.postId);
};

exports.createNewPost = (req, res) => {
  res.send("Create New Post 🆕");
};

exports.updatePost = (req, res) => {
  res.send("Update Your Existing Post 📈" + req.params.postId);
};

exports.deletePost = (req, res) => {
  res.send("Delete Your Existing Post 🔴" + req.params.postId);
};
