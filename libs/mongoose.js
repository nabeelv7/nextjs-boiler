import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (e) {
    console.error("❌ Mongoose Error: " + e.message);
  }
};

export default connectMongo;
