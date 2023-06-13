/*
============================================
; Title:  app.js
; Author: Yakut Ahmedin
; Date:   15 May 2023
; Description: eCommerce API
;===========================================
*/
import * as dotenv from "dotenv";
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import YAML from "yamljs";
import swaggerUi from "swagger-ui-express";
import authRouter from "./routes/authRoutes.js";
import privateRoutes from "./routes/privateRoutes.js";
import dbConnect from "./config/dbConnect.js";

// Middleware
dotenv.config();
dbConnect();

// Constant
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("Api running");
});

app.use("/api/auth", authRouter);
app.use("/api/private", privateRoutes);
// Serve API documentation
const swaggerDocs = YAML.load("./docs/eCommerce.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Define your server
const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Handle server shutdown on error
process.on("unhandledRejection", (err) => {
  console.log("Error: ", err);
  server.close(() => {
    process.exit(1);
  });
});
