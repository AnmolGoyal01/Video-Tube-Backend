import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { API_VERSION } from "./constants.js";

const app = express();

// config cores,json,cookieParser,etc
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ limit: "16kb", extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// routes import
import healthCheckRouter from "./routes/healthcheck.routes.js";
import userRouter from "./routes/user.routes.js";

// routes declaration
app.use(`${API_VERSION}/healthCheck`, healthCheckRouter);
app.use(`${API_VERSION}/user`, userRouter);

export { app };
