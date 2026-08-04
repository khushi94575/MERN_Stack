const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
  authname: {
    type: String,
    required: true,
    minlength: 5,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 6
  },
});

module.exports = mongoose.model("User", authSchema);