// const { Int32 } = require('bson');
const mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  productName: String,
  offer: String,
  discount: String,
  imageSrc: String,
  createdAt: mongoose.Schema.Types.Date
});

let productModel = mongoose.model('products', productSchema);

module.exports = productModel;
