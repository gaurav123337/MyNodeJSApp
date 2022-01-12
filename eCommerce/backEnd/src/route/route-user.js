const express = require("express");
const router = express.Router();
var userCtrl = require("../controller/users");
var authJWT = require('../auth');


var bodyParser = require("body-parser");
var urlEncoderParser = bodyParser.urlencoded({ extended: false });

router.use(bodyParser.json());

router.get("/list-user", authJWT, userCtrl.listUser);

router.post("/add", urlEncoderParser, userCtrl.addUser);

router.post("/signIn", urlEncoderParser, userCtrl.signIn);

module.exports = router;
