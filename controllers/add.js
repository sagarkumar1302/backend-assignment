const User = require("../models/User");
const add = async (req, res) => {
  try {
    const { firstname, lastname, email, phonenumber, status, membershipid } =
      req.body;
    if (!firstname || !lastname || !email) {
      return res.status(400).json({ error: "Required fields are missing" });
    }

    const newUser = new User({
      firstname,
      lastname,
      email,
      phonenumber,
      status,
      membershipid,
    });
    const savedUser = await newUser.save();
    res
      .status(201)
      .json({ message: "User added successfully", user: savedUser });
  } catch (error) {
    console.error("Error adding user:", error); // Log the actual error
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }
    res.status(500).json({ error: "Error in adding user: " + error.message });
  }
};
const getData = async (req, res) => {
  try {
    const passwords = await User.find();
    res.json(passwords);
  } catch (error) {
    console.error("Error getting user data:", error);
    res.status(500).json({ error: "Failed to fetch user data" });
  }
};
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res
      .status(200)
      .json({ message: "User deleted successfully", user: deletedUser });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Error deleting user: " + error.message });
  }
};
const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Error updating user: " + error.message });
  }
};
module.exports = { add, getData, deleteUser, updateUser };
