import * as mongoose from 'mongoose';

export const FlujoProcesoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    tipo_flujo_proceso_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'flujoprocesos' }],
    opciones_id: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'opciones' },
    ],
  },
  { timestamps: true },
);
