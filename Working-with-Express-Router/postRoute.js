const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Render All Posts 🗳️");
});

router.post("/", (req, res) => {
  res.send("Create New Post 🆕");
});

router.put("/", (req, res) => {
  res.send("Update Your Existing Post 📈");
});

router.delete("/", (req, res) => {
  res.send("Delete Your Existing Post 🔴");
});

module.exports = router;
