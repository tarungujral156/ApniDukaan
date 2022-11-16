import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
  },
  review: {
    type: String,
    // default: Date.now,
  },
  category: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Product", productSchema);
