import mongoose, { connect } from "mongoose";
import config from "config";

const connectDB = async () => {
    try {
        await connect(config.get("DB_URI"), config.get("DB_CONFIG"));
        console.log(`DB auth is connected 🐲 `);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};
export default connectDB;
