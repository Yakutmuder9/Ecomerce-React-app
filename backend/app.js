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

// Middleware
dotenv.config();

// Constant
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// app.use("/", (req, res) => res.send("Hello"));
// app.use("/api/auth", authRouter);
// app.use("/api/admin", adminRouter);
// app.use("/api/user", userRouter);

// Handle undefined routes
app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

// Serve API documentation
const swaggerDocs = YAML.load("./docs/eCommerce.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Serve API documentation
app.listen(port, () => {
  console.log(`Application started and listening on port ${port}!`);
});
