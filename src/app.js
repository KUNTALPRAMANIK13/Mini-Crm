import express from "express";

import cors from "cors";

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN, credential: true }));

app.use(express.json({ limit: "100kb" }));

app.use(express.urlencoded({ extended: true, limit: "100kb" }));


// routes import
// import UserRouter from "./routes/user.routes.js";
// app.use("/api/v1/users", UserRouter);

// http://localhost:8000/api/v1/users/register
export { app };
