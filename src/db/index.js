import {mongoose} from "mongoose";

const connectDB = async () => {
  try {
    const connnectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);

    console.log(
      `MongoDb Connected !! DB Host:${connnectionInstance.connection.host} `
    );
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
