const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: String,
    required: true,
    minlength: 10,
  },
  status: { type: String,  required: true, default: "Gold" },
  membershipid: {
    type: String,
    required: true,
    default: "STD001"
  },
});
const User = mongoose.model("User", userSchema, "Customers")
module.exports= User;
