import mongoose from "mongoose";

interface IDemo {
    name: string,
}

export const DemoSchema = new mongoose.Schema<IDemo>({
    name: { type: String, required: true }
});

export const DemoModelName = "demo";
export const Demo = mongoose.models[DemoModelName] as mongoose.Model<IDemo> || mongoose.model<IDemo>(DemoModelName, DemoSchema);