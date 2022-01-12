const Product = require("../model/products");

const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

var addProduct = (req, resp) => {

  console.log(req.body, 'in add product');
  let data = new Product({
    _id: new mongoose.Types.ObjectId(),
    productName: req.body.productName,
    offer: req.body.offer,
    discount: req.body.discount,
    imageSrc: req.body.imageSrc,
    createdAt: new Date().toISOString()
  });

  data
    .save()
    .then((result) => {
      resp.status(200).json({ message: "adding Product" });
    })
    .catch((err) => {
      console.log(err, 'inside error');
      resp.status(500).json({ message: "Request not succefull" });
    });
};

var listProduct = (req, resp) => {
  Product.find({}, function (err, docs) {
    if (err) throw err;
    resp.status(200).json({ message: "list products", records: docs });
  });
};

var uploadProduct = (req, resp) => {
  console.log(req.file.filename);
  resp.json({ message: 'uploaded' })
};

//Image upload starts here
// var multer = require('multer');
// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, './public/images');
//   },
//   filename: (req, file, cb) => {
//     console.log(file);
//     var filetype = '';
//     if (file.mimetype === 'image/gif') {
//       filetype = 'gif';
//     }
//     if (file.mimetype === 'image/png') {
//       filetype = 'png';
//     }
//     if (file.mimetype === 'image/jpeg') {
//       filetype = 'jpg';
//     }
//     cb(null, 'image-' + Date.now() + '.' + filetype);
//   }
// });
// var upload = multer({ storage: storage });
// router.post('/upload', upload.single('file'), function (req, res, next) {
//   console.log(req.file);
//   if (!req.file) {
//     res.status(500);
//     return next(err);
//   }
//   res.json({ fileUrl: 'http://localhost:5000/images/' + req.file.filename });
// })

//Image upload starts here
var multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images/product');
  },
  filename: function (req, file, cb) {
    console.log(file);
    let newName = Date.now() + '-' + file.originalname;
    var filetype = '';
    if (file.mimetype === 'image/gif') {
      filetype = 'gif';
    }
    if (file.mimetype === 'image/png') {
      filetype = 'png';
    }
    if (file.mimetype === 'image/jpeg') {
      filetype = 'jpg';
    }
    cb(null, newName);
  }
});
var uploaded = multer({ storage: storage });

//Image upload ends here

module.exports = {
  addProduct,
  listProduct,
  uploaded,
  uploadProduct
};
