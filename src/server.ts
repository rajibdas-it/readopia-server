import mongoose from "mongoose";
import { database_url, port } from "./config";
import app from "./app";

async function dbConnect() {
  try {
    await mongoose.connect(database_url as string);
    console.log("💕 database connected");
  } catch (error) {
    console.log("Failed to connect database", error);
  }
}

dbConnect();
