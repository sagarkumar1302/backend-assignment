const express = require("express");
const  getDataMem  = require("../controllers/membership");
const router = express.Router();
router.get("/", getDataMem);
module.exports = router;
