import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;


// Mongo db Connection
try {
  const connection = await mongoose
    .connect(`${process.env.MONGODB_URI}/FullstackAuth`)
    .then(() => {
      console.log("Mongo Db Connection established!!!!!!");
    });
} catch (error) {
  console.log("Connection error: " + error);
  process.exit(1);
}


// server running
app.listen(port, () => {
  console.log(`Server Listening on PORT: ${port}`);
});
