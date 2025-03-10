const Membership = require("../models/Membership");
const getDataMem = async (req, res) => {
  try {
    const membershipUser = await Membership.find();
    res.json(membershipUser);
  } catch (error) {
    console.error("Error getting user data:", error);
    res.status(500).json({ error: "Failed to fetch user data" });
  }
};
module.exports = getDataMem;