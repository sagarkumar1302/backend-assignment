const mongoose = require("mongoose");
const Membership = require("../models/Membership");

const dummyMemberships = [
  {
    membershipname: "Standard",
    membershipvalid: "1 Year",
    membershipid: "STD001"
  },
  {
    membershipname: "Platinum",
    membershipvalid: "2 Years",
    membershipid: "PLT001"
  }
];

const seedMemberships = async () => {
  try {
    // Check if memberships already exist
    const existingMemberships = await Membership.countDocuments();
    
    if (existingMemberships === 0) {
      await Membership.insertMany(dummyMemberships);
      console.log("Membership data seeded successfully");
    } else {
      console.log("Memberships already exist, skipping seed");
    }
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};

module.exports = seedMemberships;