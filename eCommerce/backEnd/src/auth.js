var privateKey = 'kuchtologkahege';
var jwt = require("jsonwebtoken");

var authJWT = (req, resp, next) => {
  var token = req.headers.authorization;
  token = token.split(' ')[1];
  console.log(token, 'token');
  jwt.verify(token, privateKey, function (err, docs) {
    if (err) {
      console.log(err)
    } else {
      next();
    };
    console.log(docs);
    // console.log(docs, decoded);
  })
}

module.exports = authJWT;
