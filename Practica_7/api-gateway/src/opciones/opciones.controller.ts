// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Patch,
//   Param,
//   Delete,
// } from '@nestjs/common';
// import { PersonaService } from './persona.service';
// import { CreatePersonaDto } from './dto/persona.dto';
// import { UpdatePersonaDto } from './dto/update-persona.dto';

// @Controller('persona')
// export class PersonaController {
//   constructor(private readonly personaService: PersonaService) {}

//   @Post()
//   create(@Body() createPersonaDto: CreatePersonaDto) {
//     return this.personaService.create(createPersonaDto);
//   }

//   @Get()
//   findAll() {
//     return this.personaService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.personaService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updatePersonaDto: UpdatePersonaDto) {
//     return this.personaService.update(+id, updatePersonaDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.personaService.remove(+id);
//   }
// }

import { OpcionMSG } from '../common/constants';
import { OpcionDto } from './dto/opciones.dto';
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
import { IOpcion } from 'src/common/interfaces/opciones.interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('opciones')
@Controller('api/v2/opciones')
export class OpcionController {
  constructor(private readonly clientProxy: ClientProxyCBM) {}
  private _clientProxyOpcion = this.clientProxy.clientProxyOpciones();
  @Post()
  create(@Body() opcionDto: OpcionDto): Observable<IOpcion> {
    return this._clientProxyOpcion.send(OpcionMSG.CREATE, opcionDto);
  }

  @Get()
  findAll(): Observable<IOpcion[]> {
    return this._clientProxyOpcion.send(OpcionMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IOpcion> {
    return this._clientProxyOpcion.send(OpcionMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() opcionDto: OpcionDto,
  ): Observable<IOpcion> {
    return this._clientProxyOpcion.send(OpcionMSG.UPDATE, {
      id,
      opcionDto,
    });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyOpcion.send(OpcionMSG.DELETE, id);
  }
}
