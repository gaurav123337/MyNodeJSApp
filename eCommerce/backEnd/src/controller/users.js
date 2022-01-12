const User = require("../model/users");

const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

var addUser = (req, resp) => {
  console.log(req.body.email);
  var salt = bcrypt.genSaltSync(10);
  console.log(salt);
  var password = bcrypt.hashSync(req.body.password, salt);
  console.log(password);
  let data = new User({
    _id: new mongoose.Types.ObjectId(),
    email: req.body.email,
    username: req.body.username,
    password: password,
    createdAt: new Date().toISOString()
  });

  data
    .save()
    .then((result) => {
      resp.status(200).json({ message: "adding user" });
    })
    .catch((err) => console.log(err));
};

var signIn = async (req, resp) => {
  console.log(req.body.email, req.body.password, "req");
  let response = 'login api';
  let result = await User.findOne({ email: req.body.email }, {});
  console.log(result.password, "Password");
  var match = await bcrypt.compare(req.body.password, result.password);
  console.log(match, 'match');
  //resp.status(200).json({ message: 'token', token: response });

  if (match) {
    var privateKey = 'kuchtologkahege';
    let params = {
      email: result.email
    };
    var token = await jwt.sign(params, privateKey, { expiresIn: "300s" });
    console.log(token);
    resp.status(200).json({ message: 'token', token: token });
  } else {
    resp.status(404).json({ message: 'Email/Password not matched' });
  }
};

var listUser = (req, resp, next) => {
  User.find({}, function (err, docs) {
    if (err) throw err;
    resp.status(200).json({ message: "list user", records: docs });
  });
};

module.exports = {
  addUser,
  listUser,
  signIn
};
