const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: String,
  username: String,
  password: String,
  createdAt: mongoose.Schema.Types.Date
});

let userModel = mongoose.model("users", userSchema);

module.exports = userModel;
