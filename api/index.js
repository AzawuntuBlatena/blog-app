import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js"


dotenv.config()

// mongodb connection!
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDb is Connected!!");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDb", err);
  });


const app = express();

//runing the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


app.use('/api/user', userRoutes)