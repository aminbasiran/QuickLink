import mongoose from "mongoose"
import dotenv from "dotenv"


dotenv.config()

const BASE = process.env.BASE
const USERNAME = process.env.USERNAME
const PASSWORD = process.env.PASSWORD
const CLUSTER = process.env.CLUSTER
const DATABASE = process.env.DATABASE

const URI = `${BASE}${USERNAME}:${PASSWORD}@${CLUSTER}/${DATABASE}`

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
            console.log('Database Connected');
        } catch (err) {
            console.error(err.message);
            process.exit(1);
    }
};

export default connectDB;