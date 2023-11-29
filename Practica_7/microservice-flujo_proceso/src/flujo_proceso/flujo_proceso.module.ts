// import { Module } from '@nestjs/common';
// import { DocumentoService } from './documento.service';
// import { DocumentoController } from './documento.controller';

// @Module({
//   controllers: [DocumentoController],
//   providers: [DocumentoService],
// })
// export class DocumentoModule {}
import {
  FLUJOPROCESO,
  OPCION,
  TIPOFLUJOPROCESO
} from '../common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { FlujoProcesoController } from './flujo_proceso.controller';
import { FLujoProcesoService } from './flujo_proceso.service';
import { FlujoProcesoSchema } from './schema/flujo_proceso.schema';
import { OpcionSchema } from './schema/opcion.schema';
import { TipoFlujoProcesoSchema } from './schema/tipo_flujo_proceso.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: FLUJOPROCESO.name,
        useFactory: () =>
          FlujoProcesoSchema.plugin(require('mongoose-autopopulate')),
      },
      {
        name: OPCION.name,
        useFactory: () => OpcionSchema,
      },
      {
        name: TIPOFLUJOPROCESO.name,
        useFactory: () => TipoFlujoProcesoSchema,
      },
    ]),
  ],
  controllers: [FlujoProcesoController],
  providers: [FLujoProcesoService],
})
export class FlujoProcesoModule {}
