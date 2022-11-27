const express = require("express");

const app = express();

const PORT = process.env.PORT || 4040;

// User Router
const router = express.Router();
router.get("/login", (req, res) => {
  res.send("I am Login Route 📨");
});

router.get("/logout", (req, res) => {
  res.send("I am LogOut Route 📤");
});

router.get("/signup", (req, res) => {
  res.send("I am SignUp Route 👊");
});

//User Router End 🔚

app.use("/user", router);

app.get("/", (req, res) => {
  res.send(`Server is Running 🏃‍♂️`);
});

app.listen(PORT, () => {
  console.log(`App is Running on PORT ${PORT}`);
});
