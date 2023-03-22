const mongoose = require("mongoose");

//setting connection
const dbconnect = async function () {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Task", {
      useNewUrlParser: true,
    });

    return Promise.resolve("Database Connected Successfully!");
  } catch (e) {
    return Promise.reject(new Error(e));
  }
};

//exporting connect promise
module.exports = dbconnect;
