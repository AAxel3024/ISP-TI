// import { Module } from '@nestjs/common';
// import { PersonaService } from './persona.service';
// import { PersonaController } from './persona.controller';

// @Module({
//   controllers: [PersonaController],
//   providers: [PersonaService]
// })
// export class PersonaModule {}

import { Module } from '@nestjs/common';
import { OPCION } from '../common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { OpcionController } from './opcion.controller';
import { OpcionService } from './opcion.service';
import { OpcionSchema } from './schema/opcion.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: OPCION.name,
        useFactory: () => OpcionSchema,
      },
    ]),
  ],
  controllers: [OpcionController],
  providers: [OpcionService],
})
export class OpcionModule {}
