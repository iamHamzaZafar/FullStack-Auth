import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import connectDb from "./Db/dbConnect.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;


// Db connection function
connectDb()



// server running
app.listen(port, () => {
  console.log(`Server Listening on PORT: ${port}`);
});



app.use('/api/user',userRouter);