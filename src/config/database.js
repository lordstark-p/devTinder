const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://lordstark:XvLSooW5VOGpPbWe@namastenode.af2ya.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
