const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  membershipname: {
    type: String,
    required: true,
  },
  membershipvalid: {
    type: String,
    required: true,
  },
  membershipid: {
    type: String,
    required: true,
  },
});
const MembershipUser = mongoose.model("MembershipUser", userSchema, "Membership");
module.exports= MembershipUser;
