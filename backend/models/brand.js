import mongoose from "mongoose";

const brandShcema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unqiue: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

const Brand = mongoose.model("Brand", brandShcema);
export default Brand;
