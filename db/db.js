import mongoose from 'mongoose'
import 'dotenv/config'

export const connectDB = async () => {
    return await mongoose.connect(process.env.MONGODB_URI, {
       
    })
        .then(() => {
            console.log('db connected');
        })
        .catch((error) => {
            console.error('db not connected', error);
        });
};