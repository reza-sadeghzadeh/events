import mongoose from "mongoose";
import "./connection";

export const eventModel = () => {
  //I might change this in the future
  let schema = new mongoose.Schema({
    id: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 30,
    },
    title: {
      type: String,
      minlength: 3,
      maxlength: 99,
      required: true,
    },
    summary: {
      type: String,
      minlength: 49,
      maxlength: 499,
      require: true,
      trim: true,
    },
    description: {
      type: String,
      minlength: 49,
      maxlength: 4000,
      require: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      minlength: 4,
      maxlength: 100,
    },
    path: {
      type: String,
      required: true,
    },
    date: { type: Date, required: true },
    signupLimit: { type: Number, require: true, min: 5, max: 499 },
    comments: { type: Array, required: false },
    signups: { type: Array, required: false },
  });

  const Model = mongoose.models.Event
    ? mongoose.models.Event
    : mongoose.model("Event", schema);

  return Model;
};

export const getAllData = async () => {
  const Model = eventModel();
  return await Model.find().sort("date");
};
