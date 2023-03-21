const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "Please provide a name for this product."],
    },
    description: String,
    price: {
      type: Number,
      required: true,
      min: [0, "Product price can't be negative"],
    },
    discountPercentage: Number,
    rating: {
      type: Number,
      required: [true, "Please provide a Rating for this product."],
      min: 0,
      max: 5,
    },
    brand: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Please Provide a Brand Name"],
      maxLength: 100,
      lowercase: true,
    },
    category: String,
    thumbnail: String,
    images: [String],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
