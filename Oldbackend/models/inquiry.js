import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    requreid: true,
  },
  comment: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Submitted",
    enum: ["Submitted", "Contacted", "inProgress", "Resolved"],
  },
});

const Inquiry = mongoose.model("Inquiry", inquirySchema);
export default Inquiry;
