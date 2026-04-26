import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const dbconnection = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log("✅ MongoDB connected locally")
    } catch (err) {
        console.error("❌ MongoDB connection error:", err)
    }
};