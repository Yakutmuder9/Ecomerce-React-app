import "express-async-errors";
import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import connectDB from "./config/dbConn.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import corsOptions from "./config/corsOptions.js";
import errorHandler from "./middleware/errorHandler.js";
import { logger, logEvents } from "./middleware/logger.js";

// Middleware
dotenv.config();
connectDB();

// Constant
const app = express();
app.use(logger);
app.use(cors(corsOptions));
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

// Routes
app.get("/", (req, res) => {
  res.send("Api running");
});
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/products", productRoutes);

app.all("*", (req, res) => {
  res
    .status(404)
    .json({ message: "The resource you have requested does not exist." });
});

app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(port, () => console.log(`Server running on port ${port}`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    "mongoErrLog.log"
  );
});
