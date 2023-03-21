require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// Route
const productRoute = require("./routes/product.route");

// DB connection
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/e-com");
  console.log("Database Connect");
}

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Route
app.use("/api/v1/products", productRoute);

app.listen(process.env.PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
