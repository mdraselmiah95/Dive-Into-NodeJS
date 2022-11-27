const router = require("express").Router();

//Example all posts GET
router.get("/", (req, res) => {
  res.send("Render All Posts 🗳️");
});

router.get("/:postId", (req, res) => {
  res.send("I am Post " + req.params.postId);
});

router.post("/", (req, res) => {
  res.send("Create New Post 🆕");
});

router.put("/:postId", (req, res) => {
  res.send("Update Your Existing Post 📈" + req.params.postId);
});

router.delete("/:postId", (req, res) => {
  res.send("Delete Your Existing Post 🔴" + req.params.postId);
});

module.exports = router;

// video: 6.7
