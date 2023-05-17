import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const dbConnect = () => {
  try {
    const connect = mongoose.connect(process.env.MONGODB_URI);
    console.log("Db Connected successfully!");
  } catch (error) {
    console.log("DB Error!");
  }
};

export default dbConnect;
