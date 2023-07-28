import mongoose from "mongoose";
import { env } from "~/env.mjs";
export async function init() {
    console.log(mongoose.connection?.db)
    await mongoose.connect(env.MONGO_DB_CONNECTION_STRING);
    console.log(mongoose.connection?.db)
}