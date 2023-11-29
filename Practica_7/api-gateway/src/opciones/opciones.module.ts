import { Module } from '@nestjs/common';
import { ProxyModule } from '../common/proxy/proxy.module';
import { OpcionController } from './opciones.controller';

@Module({
  imports: [ProxyModule],
  controllers: [OpcionController],
})
export class OpcionModule {}
