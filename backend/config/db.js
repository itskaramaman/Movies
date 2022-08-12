const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo DB connected: ${conn.connection.host}`);
  } catch (err) {
    console.log("Could not connect to Mongo DB: ");
    console.log(err);
  }
};

module.exports = connectDB;
