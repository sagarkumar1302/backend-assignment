const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const connectDB = require("./lib/db")
const membershipSeed = require("./seed/membershipSeeder")
const userAuth = require("./router/user.auth")
const memberAuth = require("./router/membership.auth")
dotenv.config()
const app= express();
app.use(cors())
const PORT = process.env.PORT
connectDB();
membershipSeed();
app.use(express.json());
app.get("/", (req,res)=>{
    res.send("hello i am working")
})
app.use("/auth", userAuth)
app.use("/member", memberAuth)
app.listen(PORT, ()=>{
    console.log("Running on this port", PORT);
    
})