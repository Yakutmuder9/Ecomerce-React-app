import mongoose from "mongoose";

const coupponSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
  },
  expiry: {
    type: Date,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
});

const Coupon = mongoose.model("Coupon", coupponSchema);
export default Coupon;
