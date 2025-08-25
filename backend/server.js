import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
import messageRoute from "./routes/messageRoute.js";

const app = express();

dotenv.config();

connectDB();
const PORT = process.env.PORT || 7000;

//Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
