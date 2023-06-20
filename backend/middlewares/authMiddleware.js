import User from "../models/user.js";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];

    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded?.id);
        req.user = user;
        next();
      }
    } catch (error) {
      res.status(401).json({ message: "Authorirization expire, Pleae login!" });
    }
  } else {
    res.status(500).json({ message: "There is no token attacked to header!" });
  }
});

const isAdmin = asyncHandler(async (req, res, next) => {
  const { email } = req.user;
  const adminuser = await User.findOne({ email });

  if (adminuser.role !== "admin") {
    res.status(401).json({ message: "You are not an admin"});
  } else {
    next();
  }
});

export { authMiddleware, isAdmin };
