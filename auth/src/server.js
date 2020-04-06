import express from "express";
import dotenv from "dotenv";
import authRoutes from "./api/auth";
import { json } from "body-parser";
import cors from "cors";
import connectDB from "./db/index";
import cookieParser from "cookie-parser";
const env = dotenv.config().parsed;
const { PORT, NODE_ENV } = env;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(json());
app.use(cookieParser());
app.use(cors());

app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
    res.send("HELLO");
});
connectDB();
app.listen(PORT, () => {
    console.log(`connected to port: ${PORT}`);
    NODE_ENV === "development"
        ? console.log(`http://localhost:${PORT}`)
        : console.log(`${env.SERVICE_URI}`);
});
