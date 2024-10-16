const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://taylor20:test123@cluster0.jvzzw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("MongoDB connected");
    } catch (error){
        console.log("MongoDB connection failed: ", error);
    }
}

module.exports = connectDB;