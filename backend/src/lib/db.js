import mongoose from "mongoose";
import {config} from 'dotenv';
import path from 'path';
if (process.env.NODE_ENV === "production") {
    config(); // Loads .env file
} else {
    config({ path: path.resolve(process.cwd(), '.env.local') });
}
const MONGODB_URI = process.env.MONGODB_URI;

export const connectDB = async()=>{
    try{
       const conn = await mongoose.connect(MONGODB_URI);
       console.log(`MongoDB connected: ${conn.connection.host}`); 
    } catch(error){
       console.log("MongoDB connection error:",error);  
    }
};