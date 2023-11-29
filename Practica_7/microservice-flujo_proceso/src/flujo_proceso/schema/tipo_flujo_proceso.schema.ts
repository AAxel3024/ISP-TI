import * as mongoose from 'mongoose';

export const TipoFlujoProcesoSchema = new mongoose.Schema({
  name: { type: String, required: true },
});
