const express = require("express");
const cors = require(cors);

const app = express();
app.use(cors());
const PORT = process.env.PORT || 4040;

// User Router
const router = express.Router();
router.get("/login", (req, res) => {
  res.send("I am Login Route 📨");
});

router.get("/logout", (req, res) => {
  rs.send("I am LogOut Route 📤");
});

router.get("/signup", (req, res) => {
  console.log("I am SignUp Route 👊");
});

//User Router End

app.get("/", (req, res) => {
  res.send(`Server is Running 🏃‍♂️`);
});

app.listen(PORT, () => {
  console.log(`App is Running on PORT ${PORT}`);
});
