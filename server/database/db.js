import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const Connection = () => {
    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;
    const MONGODBURI = `mongodb+srv://${USERNAME}:${PASSWORD}@javaapi.evp6tqb.mongodb.net/?retryWrites=true&w=majority`;


    mongoose.connect(MONGODBURI, {
        useNewUrlParser: true
    });
    mongoose.set('strictQuery', true);
    mongoose.connection.on('connected', () => {
        console.log("Database connected successfully");
    })

    mongoose.connection.on('disconnected', () => {
        console.log("Database disconnected");
    })

    mongoose.connection.on('error', (error) => {
        console.log("Error while connecting with the database", error.message);
    })
}

export default Connection;