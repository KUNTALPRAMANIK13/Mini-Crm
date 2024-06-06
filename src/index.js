import dotenv from "dotenv";
import connectDB from "./db/index.js";


dotenv.config({ path: "./env" });
import { app } from "./app.js";

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error while connecting to the database");
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch(() => {
    console.log("MongoDb Connection Failed", error);
  });
