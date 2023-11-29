import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlujoProcesoModule } from './flujo_proceso/flujo_proceso.module';
import { OpcionModule } from './opciones/opciones.module';
import { TipoFlujoProcesoModule } from './tipo_flujo_proceso/tipo_flujo_proceso.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      isGlobal: true,
    }),
    FlujoProcesoModule,
    OpcionModule,
    TipoFlujoProcesoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
