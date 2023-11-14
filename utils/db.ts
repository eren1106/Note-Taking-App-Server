import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL as string);
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connectDB;
