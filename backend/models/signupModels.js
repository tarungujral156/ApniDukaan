import mongoose from "mongoose";

const signupTemplate = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Phone: {
    type: Number,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    Default: Date.now,
  },
});

export default mongoose.model("users", signupTemplate);
