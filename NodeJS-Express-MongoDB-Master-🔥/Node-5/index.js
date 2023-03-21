require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const express = require("express");
const { Schema } = mongoose;

const app = express();
const PORT = process.env.PORT || 8080;

// DB connection
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/e-com");
  console.log("Database Connect");
}

// Schema
const productSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  brand: String,
  category: String,
  thumbnail: String,
  images: [String],
});

const Product = mongoose.model("Product", productSchema);

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Route

app.listen(process.env.PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
