import express from "express";

import cors from "cors";

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN, credential: true }));

app.use(express.json({ limit: "100kb" }));

app.use(express.urlencoded({ extended: true, limit: "100kb" }));

// routes import
import customer from "./routes/user.routes.js";
import order from "./routes/order.routes.js";

app.use("/api/users", customer);
app.use("/api/v1/orders", order);

// http://localhost:8000/api/v1/users
// http://localhost:8000/api/v1/orders/order
export { app };
