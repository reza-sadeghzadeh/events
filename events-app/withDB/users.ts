import mongoose from "mongoose";
import connectToDb from "./connect";

connectToDb();

const getUsersModel = () => {
  const userSchema = new mongoose.Schema({
    name: {
      type: String,
      minlength: 2,
      maxlength: 49,
      required: true,
    },
    password: {
      type: String,
      minlength: 8,
      maxlength: 32,
      required: true,
    },
    lastname: {
      type: String,
      minlength: 2,
      maxlength: 49,
      required: true,
    },
    phoneNumber: {
      type: String,
      length: 11,
      required: true,
    },
    email: {
      type: String,
      minlength: 2,
      maxlength: 49,
      required: true,
      unique: true,
    },
    comments: {
      type: [Object],
    },
    signupEvents: {
      type: [Object],
    },
  });
  const UserModel = mongoose.models.User || mongoose.model("User", userSchema);
  return UserModel;
};

export const createUser = async (user: object) => {
  const UserModel = getUsersModel();
  let newUser = new UserModel(user);
  newUser = await newUser.save();
  return newUser;
};
