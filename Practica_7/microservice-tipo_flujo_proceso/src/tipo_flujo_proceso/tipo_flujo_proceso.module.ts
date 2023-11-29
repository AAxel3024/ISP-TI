// import { Module } from '@nestjs/common';
// import { ProcesoDeterminadoService } from './proceso_determinado.service';
// import { ProcesoDeterminadoController } from './proceso_determinado.controller';

// @Module({
//   controllers: [ProcesoDeterminadoController],
//   providers: [ProcesoDeterminadoService],
// })
// export class ProcesoDeterminadoModule {}
import { Module } from '@nestjs/common';
import { TIPOFLUJOPROCESO } from './../common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import {TipoFlujoProcesoController  } from './tipo_flujo_proceso.controller';
import { TipoFlujoProcesoService } from './tipo_flujo_proceso.service';
import { TipoFlujoProcesoSchema } from './schema/tipo_flujo_proceso';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: TIPOFLUJOPROCESO.name,
        useFactory: () => TipoFlujoProcesoSchema,
      },
    ]),
  ],
  controllers: [TipoFlujoProcesoController],
  providers: [TipoFlujoProcesoService],
})
export class TipoFlujoProcesoModule {}
