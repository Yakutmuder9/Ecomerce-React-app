import mongoose from "mongoose";
import bcrypt from "bcrypt";
import crypto from "crypto";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please provide First name"],
      minLength: [3, "First name must be atleast 3 letter"],
    },
    lastName: {
      type: String,
      required: [true, "Please provide Last name"],
      minLength: [3, "First name must be atleast 3 letter"],
    },
    email: {
      type: String,
      required: [true, "Please provide email address"],
      unique: [true, "Email has already been registered"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ],
    },
    mobile: {
      type: String,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      minLength: [6, "Password must be up to 6 characters"],
    },
    profile_pic: {
      type: String,
      default: "https://i.ibb.co/4pDNDk1/avatar.png",
    },
    cart: {
      type: Array,
      default: false,
    },
    address: {
      type: String,
    },
    whishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    isBlocked: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      default: "user",
    },
    refreshToken: {
      type: String,
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSaltSync(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
userSchema.methods.isPasswordMatched = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.passwordResetExpires = Date.now() + 30 * 60 * 1000; // 30 min
  return resetToken;
};

const User = mongoose.model("User", userSchema);
export default User;
