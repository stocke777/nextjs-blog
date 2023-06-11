import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("CONNECTED TO MONGODB...")
  } catch (error) {
    throw new Error("CONNECTION FAILED TO MONGODB!!!");
  }
};

export default connect;
