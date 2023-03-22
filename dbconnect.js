const mongoose = require("mongoose");

//setting connection
const dbconnect = async function () {
  try {
    await mongoose.connect("mongodb+srv://AmanChhabra:aman123@cluster0.hvakj1v.mongodb.net/test", {
      useNewUrlParser: true,
    });

    return Promise.resolve("Database Connected Successfully!");
  } catch (e) {
    return Promise.reject(new Error(e));
  }
};

//exporting connect promise
module.exports = dbconnect;
