import mongoose from "mongoose";
import connectToDb from "./connect";
import jwt from "jsonwebtoken";

connectToDb();

export const getUsersModel = () => {
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
      maxlength: 1024,
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
export const getUser = async (user: object) => {
  const UserModel = getUsersModel();
  let gotUser = await UserModel.findOne({ email: user.email });
  return gotUser;
};
export const getUserbyJwt = async (token: string) => {
  let id: { _id: string } = jwt.decode(token);

  const UserModel = getUsersModel();
  let gotUser = await UserModel.findOne({ _id: id._id }).select(
    "name lastname email phonenumber"
  );
  // console.log(gotUser);
  return gotUser;
};
