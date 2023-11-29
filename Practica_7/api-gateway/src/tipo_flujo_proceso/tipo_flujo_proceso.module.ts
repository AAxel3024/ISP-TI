import { Module } from '@nestjs/common';
import { ProxyModule } from '../common/proxy/proxy.module';
import { TipoFlujoProcesoController } from './tipo_flujo_proceso.controller';

@Module({
  imports: [ProxyModule],
  controllers: [TipoFlujoProcesoController],
})
export class TipoFlujoProcesoModule {}
