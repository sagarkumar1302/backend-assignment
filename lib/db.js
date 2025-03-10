const mongoose = require("mongoose")
const connectDb = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected on the host", conn.connection.host);
        
    } catch (error) {
        
        console.log("Failed in mongo db connection", error);
    }
}
module.exports = connectDb;