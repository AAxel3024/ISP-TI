// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { DocumentoService } from './documento.service';
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

import { FlujoProcesoMSG } from '../common/constants';
import { FlujoProcesoDto } from './dto/flujo_proceso.dto';
import { Observable } from 'rxjs';
import { ClientProxyCBM } from '../common/proxy/client-proxy';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import {IFlujoProceso } from 'src/common/interfaces/flujo_proceso.interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('flujoprocesos')
@Controller('api/v2/flujoprocesos')
export class FlujoProcesoController {
  constructor(private readonly clientProxy: ClientProxyCBM) {}
  private _clientProxyFlujoProceso = this.clientProxy.clientProxyFlujoProceso();
  @Post()
  create(@Body() flujoProcesoDto: FlujoProcesoDto): Observable<IFlujoProceso> {
    return this._clientProxyFlujoProceso.send(FlujoProcesoMSG.CREATE, flujoProcesoDto);
  }

  @Get()
  findAll(): Observable<IFlujoProceso[]> {
    return this._clientProxyFlujoProceso.send(FlujoProcesoMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IFlujoProceso> {
    return this._clientProxyFlujoProceso.send(FlujoProcesoMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() flujoProcesoDto: FlujoProcesoDto,
  ): Observable<IFlujoProceso> {
    return this._clientProxyFlujoProceso.send(FlujoProcesoMSG.UPDATE, {
      id,
      flujoProcesoDto,
    });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyFlujoProceso.send(FlujoProcesoMSG.DELETE, id);
  }
}
