require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const publicKey = fs.readFileSync(
  path.resolve(__dirname, "./public.key"),
  "utf-8"
);

const app = express();
const PORT = process.env.PORT || 8080;

// BodyParser
const auth = (req, res, next) => {
  try {
    const token = req.get("Authorization").split("Bearer ")[1];
    const decoded = jwt.verify(token, publicKey);
    if (decoded.email) {
      next();
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    res.sendStatus(401);
  }
};

// TODO: Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use(express.static(process.env.PUBLIC_DIR));
// app.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));

// TODO: Path Deceleration
// app.use("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "build", "index.html"));
// });

// TODO: Route
const productRoute = require("./routes/product.route");
const userRoute = require("./routes/user.route");
const authRoute = require("./routes/auth.route");

// var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true });

// TODO: DB connection
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Database Connect");
}

// TODO: Route
app.use("/api/v1/products", productRoute);
app.use("/user", userRoute);
app.use("/auth", authRoute);

app.listen(process.env.PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
