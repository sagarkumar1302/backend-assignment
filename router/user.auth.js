const express = require("express")
const {add, getData, deleteUser, updateUser} = require("../controllers/add")
const router = express.Router();
router.post("/add", add);
router.get("/", getData);
router.delete("/delete/:id", deleteUser);
router.put("/update/:id", updateUser );
module.exports= router;
