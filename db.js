const mongoose = require("mongoose");

// const localDB = `mongodb://localhost:27017/social`;


const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database is connected`);
}

module.exports = connectDB;