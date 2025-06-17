import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
  },
  image: {
    type: String,
  },
});

export default mongoose.models.User || mongoose.model("User", userSchema);
