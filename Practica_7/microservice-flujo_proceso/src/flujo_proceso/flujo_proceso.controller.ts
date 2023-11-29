// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { fLujoProcesoService } from './documento.service';
// import { CreateDocumentoDto } from './dto/create-documento.dto';
// import { UpdateDocumentoDto } from './dto/update-documento.dto';

// @Controller('documento')
// export class DocumentoController {
//   constructor(private readonly documentoService: DocumentoService) {}

//   @Post()
//   create(@Body() createDocumentoDto: CreateDocumentoDto) {
//     return this.documentoService.create(createDocumentoDto);
//   }

//   @Get()
//   findAll() {
//     return this.documentoService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.documentoService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateDocumentoDto: UpdateDocumentoDto) {
//     return this.documentoService.update(+id, updateDocumentoDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.documentoService.remove(+id);
//   }
// }
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FlujoProcesoDTO } from './dto/flujo_proceso.dto';
import { FLujoProcesoService } from './flujo_proceso.service';
import { Controller } from '@nestjs/common';
import { FlujoProcesoMSG } from 'src/common/constants';

@Controller()
export class FlujoProcesoController {
  constructor(private readonly fLujoProcesoService: FLujoProcesoService) {}

  @MessagePattern(FlujoProcesoMSG.CREATE)
  create(@Payload() flujoProcesoDTO: FlujoProcesoDTO) {
    return this.fLujoProcesoService.create(flujoProcesoDTO);
  }

  @MessagePattern(FlujoProcesoMSG.FIND_ALL)
  findAll() {
    return this.fLujoProcesoService.findAll();
  }

  @MessagePattern(FlujoProcesoMSG.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.fLujoProcesoService.findOne(id);
  }

  @MessagePattern(FlujoProcesoMSG.UPDATE)
  update(@Payload() payload) {
    return this.fLujoProcesoService.update(payload.id, payload.flujoProcesoDTO);
  }

  @MessagePattern(FlujoProcesoMSG.DELETE)
  delete(@Payload() id: string) {
    return this.fLujoProcesoService.delete(id);
  }
}
