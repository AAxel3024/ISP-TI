// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { opcionService } from './persona.service';
// import { CreatePersonaDto } from './dto/create-persona.dto';
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

import { MessagePattern, Payload } from '@nestjs/microservices';
import { OpcionDTO } from './dto/opcion.dto';
import { OpcionService } from './opcion.service';
import { Controller } from '@nestjs/common';
import { OpcionMSG } from 'src/common/constants';

@Controller()
export class OpcionController {
  constructor(private readonly opcionService: OpcionService) {}

  @MessagePattern(OpcionMSG.CREATE)
  create(@Payload() opcionDTO: OpcionDTO) {
    return this.opcionService.create(opcionDTO);
  }

  @MessagePattern(OpcionMSG.FIND_ALL)
  findAll() {
    return this.opcionService.findAll();
  }

  @MessagePattern(OpcionMSG.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.opcionService.findOne(id);
  }

  @MessagePattern(OpcionMSG.UPDATE)
  update(@Payload() payload) {
    return this.opcionService.update(payload.id, payload.personaDTO);
  }

  @MessagePattern(OpcionMSG.DELETE)
  delete(@Payload() id: string) {
    return this.opcionService.delete(id);
  }
}
