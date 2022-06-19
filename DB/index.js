const mongoose = require("mongoose");
const DB = "mongodb://localhost:27017/AdminPanel"

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("connection successfully");
  }).catch((err) => console.log("Sorry no connection"))
  