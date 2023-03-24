require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use(express.static(process.env.PUBLIC_DIR));
// app.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));

// TODO: Path Deceleration
app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

// Route
const productRoute = require("./routes/product.route");

// DB connection
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Database Connect");
}

// Route
app.use("/api/v1/products", productRoute);

app.listen(process.env.PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
