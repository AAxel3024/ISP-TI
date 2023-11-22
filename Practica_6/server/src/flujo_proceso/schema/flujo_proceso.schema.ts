// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import mongoose, { Document } from 'mongoose';
// import { Opciones } from 'src/opciones/schema/opciones.schema';
// import { TipoFlujoProceso } from 'src/tipo_flujo_proceso/schema/tipo_flujo_proceso.schema';

// export type FlujoProcesoDocument = FlujoProceso & Document;

// @Schema()
// export class FlujoProceso {

//     @Prop()
//     name: string;

//     @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'TipoFlujoProceso'})
//     tipo_flujo_proceso_id: TipoFlujoProceso;

//     @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Opciones'})
//     opciones_id: Opciones;

// };

// export const FlujoProcesoSchema = SchemaFactory.createForClass(FlujoProceso);
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Opciones } from 'src/opciones/schema/opciones.schema';
import { TipoFlujoProceso } from 'src/tipo_flujo_proceso/schema/tipo_flujo_proceso.schema';

export type FlujoProcesoDocument = FlujoProceso & Document;

@Schema()
export class FlujoProceso {
  @Prop()
  name: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Tipoflujoproceso' })
  tipo_flujo_proceso_id: TipoFlujoProceso;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Opcion' })
  opciones_id: Opciones;
  @Prop({ default: true })
  estado: boolean;
}

export const FlujoProcesoSchema = SchemaFactory.createForClass(FlujoProceso);
