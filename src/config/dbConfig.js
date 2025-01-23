import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const dbConfig = `mongodb+srv://fabibinho2:${process.env.PASSWORD_DB}@taskmanager.muujb.mongodb.net/?retryWrites=true&w=majority&appName=TaskManager`;

const connection = mongoose.connect(dbConfig);

export default connection;


