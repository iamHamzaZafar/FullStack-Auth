import mongoose from "mongoose";


const connectDb = async () =>{
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
      
}


export default connectDb;