import mongoose from "mongoose";
import debug from "debug";
const dbDebug = debug("app:mongo");

export function connectToDb() {
  mongoose
    .connect("mongodb://localhost:27017/events")
    .then(() => dbDebug("connected to db...."));
}
