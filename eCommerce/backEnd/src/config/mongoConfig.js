const mongoose = require("mongoose");

const uri =
  "mongodb+srv://root:root@cluster0.qoljq.mongodb.net/e-commerce?retryWrites=true&w=majority";

mongoose
  .connect(uri, { useNewUrlParser: true })
  .then((conn) => {
    console.log("Connection is successfull");
  })
  .catch((error) => {
    console.log("Error" + error.message);
  });

module.exports = mongoose;
