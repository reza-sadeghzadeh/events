import mongoose from "mongoose";

(function connectToDb() {
  mongoose.connect("mongodb://localhost:27017/events").then(() => {
    console.log("connected to db....");
  });
})();
