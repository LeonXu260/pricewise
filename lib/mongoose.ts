import mongoose from 'mongoose';

let isConnected = false; // Variable to track the connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (!process.env.MONGODB_URI) return console.log('Unable to connect to the database');

    if (isConnected) return console.log('=> connected using existing database connection');

    try {
        await mongoose.connect(process.env.MONGODB_URI);

        isConnected = true;
        console.log('Connected to the database');
    } catch (error) {
        console.log(error);
    }
}