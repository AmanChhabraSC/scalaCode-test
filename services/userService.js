const userModel = require("../models/user");
const bunyan = require("bunyan");

let log = bunyan.createLogger({ name: "Service logs" });

async function addUser(data) {
  try {
    const userData = new userModel(data);
    const res = await userData.save();
    return "User Created Successfully";
  } catch (error) {
    log.info(error);
    throw error;
  }
}

async function getUser(userID) {
  try {
    const userById = await userModel.findOne(
      { _id: userID },
      { __v: 0, _id: 0, createdAt: 0, updatedAt: 0 }
    );
    if(userById){
    return userById
    }
    else{
      return {message: "Please Enter the correct ID"}
    };
  } catch (error) {
    log.info(error);
    throw error;
  }
}

//pagination and sorting by name in descending order and filtering by age greater than 25
async function getAllUser(params) {
  try {
    const allUsers = await userModel
      .find(
        { age: { $gt: 25 } },
        { _id: 0, __v: 0, createdAt: 0, updatedAt: 0 }
      )
      .limit(params.pageSize)
      .skip(params.page * params.pageSize)
      .sort({ name: -1 });
    return allUsers;
  } catch (error) {
    log.info(error);
    throw error;
  }
}

async function updateUser(id, data) {
  try {
    let updateUser = await userModel.findOneAndUpdate(
      { _id: id },
      { $set: data, upsert: true },
      { new: false }
    );
    if(updateUser){
    return updateUser;
    }
    else{
      return {message: "Please Enter the correct ID"}
    }
  } catch (err) {
    log.info(err);
    throw err;
  }
}

async function deleteUser(id) {
  try {
    let deleteUser = await userModel.findByIdAndDelete({ _id: id });
    if(deleteUser){
    return deleteUser;
    }
    else{
      return "Please Enter the Correct ID"
    }
  } catch (err) {
    log.info(err);
    throw err;
  }
}


module.exports = {
  addUser,
  getUser,
  updateUser,
  deleteUser,
  getAllUser,
};
