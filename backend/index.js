import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js"
import connectDb from "./Db/dbConnect.js";
import cors from 'cors'

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;


app.use(cors()) ;
// Db connection function
connectDb()
// app.use(express.urlencoded())
app.use(express.json());



// server running
app.listen(port, () => {
  console.log(`Server Listening on PORT: ${port}`);
});


// defining routes
app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
