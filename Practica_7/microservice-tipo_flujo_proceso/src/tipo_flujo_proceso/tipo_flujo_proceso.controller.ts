// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Patch,
//   Param,
//   Delete,
// } from '@nestjs/common';
// import { ProcesoDeterminadoService } from './proceso_determinado.service';
// import { CreateProcesoDeterminadoDto } from './dto/proceso_determinado.dto';
// import { UpdateProcesoDeterminadoDto } from './dto/update-proceso_determinado.dto';

// @Controller('proceso-determinado')
// export class ProcesoDeterminadoController {
//   constructor(
//     private readonly procesoDeterminadoService: ProcesoDeterminadoService,
//   ) {}

//   @Post()
//   create(@Body() createProcesoDeterminadoDto: CreateProcesoDeterminadoDto) {
//     return this.procesoDeterminadoService.create(createProcesoDeterminadoDto);
//   }

//   @Get()
//   findAll() {
//     return this.procesoDeterminadoService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.procesoDeterminadoService.findOne(+id);
//   }

//   @Patch(':id')
//   update(
//     @Param('id') id: string,
//     @Body() updateProcesoDeterminadoDto: UpdateProcesoDeterminadoDto,
//   ) {
//     return this.procesoDeterminadoService.update(
//       +id,
//       updateProcesoDeterminadoDto,
//     );
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.procesoDeterminadoService.remove(+id);
//   }
// }
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TipoFlujoProcesoDTO } from './dto/tipo_flujo_proceso.dto';
import { TipoFlujoProcesoService } from './tipo_flujo_proceso.service';
import { Controller } from '@nestjs/common';
import { TipoFlujoProcesoMSG } from 'src/common/constants';

@Controller()
export class TipoFlujoProcesoController {
  constructor(
    private readonly tipoFlujoProcesoService: TipoFlujoProcesoService,
  ) {}

  @MessagePattern(TipoFlujoProcesoMSG.CREATE)
  create(@Payload() tipoFlujoProcesoDTO: TipoFlujoProcesoDTO) {
    return this.tipoFlujoProcesoService.create(tipoFlujoProcesoDTO);
  }

  @MessagePattern(TipoFlujoProcesoMSG.FIND_ALL)
  findAll() {
    return this.tipoFlujoProcesoService.findAll();
  }

  @MessagePattern(TipoFlujoProcesoMSG.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.tipoFlujoProcesoService.findOne(id);
  }

  @MessagePattern(TipoFlujoProcesoMSG.UPDATE)
  update(@Payload() payload) {
    return this.tipoFlujoProcesoService.update(
      payload.id,
      payload.tipoFlujoProcesoDTO,
    );
  }

  @MessagePattern(TipoFlujoProcesoMSG.DELETE)
  delete(@Payload() id: string) {
    return this.tipoFlujoProcesoService.delete(id);
  }
}
