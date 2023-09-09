import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import userRoutes from "../routes/user.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT as any, () =>
  console.log(`The server is running on port: ${PORT}`)
);
