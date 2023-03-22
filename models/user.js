const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true,"Please Enter your Name"], unique: true },
    age: { type: Number, required: true },
    maritalStatus: { type: String, required: true },
    sex: { type: String, required: true },
    school: { type: String, required: true },
    university: { type: String, required: true },
  },
  { timestamps: true }
);


const userModel = mongoose.model("users", UserSchema);

module.exports = userModel;
