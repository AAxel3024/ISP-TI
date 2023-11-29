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

import { TipoFlujoProcesoMSG } from '../common/constants';
import { TipoFlujoProcesoDto } from './dto/tipo_flujo_proceso.dto';
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
import { ITipoFlujoProceso } from 'src/common/interfaces/tipo_flujo_proceso.interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tipoflujoproceso')
@Controller('api/v2/tipoflujoproceso')
export class TipoFlujoProcesoController {
  constructor(private readonly clientProxy: ClientProxyCBM) {}
  private _clientProxyTipoFlujoProceso =
    this.clientProxy.clientProxyTipoFlujoProceso();
  @Post()
  create(
    @Body() tipoFlujoProcesoDto: TipoFlujoProcesoDto,
  ): Observable<ITipoFlujoProceso> {
    return this._clientProxyTipoFlujoProceso.send(
      TipoFlujoProcesoMSG.CREATE,
      tipoFlujoProcesoDto,
    );
  }

  @Get()
  findAll(): Observable<ITipoFlujoProceso[]> {
    return this._clientProxyTipoFlujoProceso.send(
      TipoFlujoProcesoMSG.FIND_ALL,
      '',
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<ITipoFlujoProceso> {
    return this._clientProxyTipoFlujoProceso.send(
      TipoFlujoProcesoMSG.FIND_ONE,
      id,
    );
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() tipoFlujoProcesoDto: TipoFlujoProcesoDto,
  ): Observable<ITipoFlujoProceso> {
    return this._clientProxyTipoFlujoProceso.send(
      TipoFlujoProcesoMSG.UPDATE,
      {
        id,
        tipoFlujoProcesoDto,
      },
    );
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyTipoFlujoProceso.send(
      TipoFlujoProcesoMSG.DELETE,
      id,
    );
  }
}
