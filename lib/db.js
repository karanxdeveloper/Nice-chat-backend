import mongoose from "mongoose";

//Function to connect to the mongoDB database

export const connectDB = async () =>{
    try {
        
        mongoose.connection.on('connected', ()=> console.log
        ("connection to database is established"))

        await mongoose.connect(process.env.MONGODB_URI)

        
    } catch (error) {
        console.log(error);
        
    }
}