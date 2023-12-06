import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
  name: String,
});

const model = mongoose.model("Task", taskSchema);

export const schema = model.schema;

export default model;
