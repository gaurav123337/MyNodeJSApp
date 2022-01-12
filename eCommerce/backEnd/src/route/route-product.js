const express = require("express");
const router = express.Router();

var productCtrl = require('../controller/products');
// var privateKey = 'kuchtologkahege';
// var jwt = require("jsonwebtoken");
var authJWT = require('../auth');

var bodyParser = require("body-parser");
var urlEncoderParser = bodyParser.urlencoded({ extended: false });

router.use(bodyParser.json());

// var authJWT = (req, resp, next) => {
//   var token = req.headers.authorization;
//   token = token.split(' ')[1];
//   console.log(token, 'token');
//   jwt.verify(token, privateKey, function (err, docs) {
//     if (err) {
//       console.log(err, 'error in err');
//     } else {
//       next();
//     };
//     console.log(docs, 'error in JWT');
//   })
// }

router.post("/upload", productCtrl.uploaded.single('product_img'), productCtrl.uploadProduct);

router.post("/addProduct", authJWT, urlEncoderParser, productCtrl.addProduct);

router.get("/listProduct", authJWT, productCtrl.listProduct);

// router.get("/listProduct", productCtrl.listProduct);

module.exports = router;
