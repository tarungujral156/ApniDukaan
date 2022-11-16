import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routesUrl from "./routes/route.js";
import cors from "cors";

const app = express();

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, () => {
  console.log("Database connected");
});

const PORT = 4000;



// app.use(expess.static('front-end'))
app.use(express.json());
app.use(cors());
app.use("/app", routesUrl);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});