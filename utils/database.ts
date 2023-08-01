import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is Connected");
    return;
  }

  if (!process.env.MONGODB_URI) throw new Error("URI undefined");

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "message_from_personal_site",
    });

    isConnected = true;

    console.log("MongoDB Connected");
  } catch (error) {
    throw new Error("Failed to connect");
  }
};
