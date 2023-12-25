const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  email: String,
  name: String,
  className: Number,
  phoneNo: Number,
  password: String,
});

module.exports = mongoose.model("users", usersSchema);
