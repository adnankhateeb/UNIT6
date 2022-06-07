const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
   productName: { type: String, required: true },
   categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "categories" }],
   productImgLink: { type: String },
   productPrice: { type: String },
   description: { type: String },
});

const Product = new mongoose.model("product", productSchema);

module.exports = Product;
