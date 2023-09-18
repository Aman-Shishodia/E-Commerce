const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productname: {
      type: String,
    },
    productimage: {
      type: String,
    },
    productprice: {
      type: Number,
    },
    payment: {
      type: String,
    },
  },
  { timestamps: true }
);

const Product = new mongoose.model("Product", productSchema);

module.exports = Product;
