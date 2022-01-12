const express = require('express');
const mongoose = require('mongoose');
const { MONGOURI } = require('./keys');
const app = express();
const PORT = 5000;

//Connection to mongo
mongoose.connect(MONGOURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.connection.on('connected', () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on('error', (error) => {
  console.log("Error: " + error);
})

//Routes
// app.get("/", (req, res) => {
//   res.send("Hello world!")
// });

// app.get("/home", (req, res) => {
//   res.send("Home")
// });

// app.get("/category", (req, res) => {
//   res.send("category")
// });


//Model import
require("./models/post");
require("./models/category");
require("./models/comment");

app.use(express.json());

//Route import
app.use(require("./routes/post"));
app.use(require("./routes/category"));
app.use(require("./routes/comment"));

app.listen(PORT, () => {
  console.log("Server started at : ", PORT)
})
