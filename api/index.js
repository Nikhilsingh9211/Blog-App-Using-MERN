import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Mongoose Connected to Mongo DB Server"));

const app = express();

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
