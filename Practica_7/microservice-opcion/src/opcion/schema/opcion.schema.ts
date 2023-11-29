import * as mongoose from 'mongoose';

export const OpcionSchema = new mongoose.Schema({
  type: { type: String, required: true },
  content: { type: String, required: true },
});
