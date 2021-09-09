import mongoose from "mongoose";

export default function connectToDb() {
  mongoose
    .connect("mongodb://localhost:27017/events")
    .catch((ex) => console.log(ex))
    .then(() => {
      console.log("connected to db....");
    });
}
