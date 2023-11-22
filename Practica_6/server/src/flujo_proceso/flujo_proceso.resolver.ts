// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Patch,
//   Param,
//   Delete,
//   UseGuards,
// } from '@nestjs/common';
// import { DocumentoService } from './documento.service';
// import { CreateDocumentoInput } from './dto/inputs/create-documento.input';
// import { UpdateDocumentoInput } from './dto/inputs/update-documento.input';
// import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

// @ApiBearerAuth()
// @ApiTags('documento')
// // @UseGuards(JwtAuthGuard)
// @Controller('documento')
// export class DocumentoController {
//   constructor(private readonly documentoService: DocumentoService) {}

//   @Post()
//   create(@Body() createDocumentoDto: CreateDocumentoInput) {
//     return this.documentoService.create(createDocumentoDto);
//   }

//   @Get()
//   findAll() {
//     return this.documentoService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.documentoService.findOne(id);
//   }

//   @Patch(':id')
//   update(
//     @Param('id') id: string,
//     @Body() updateDocumentoDto: UpdateDocumentoInput,
//   ) {
//     return this.documentoService.update(id, updateDocumentoDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.documentoService.remove(id);
//   }
// }
// resolutor
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { FlujoProcesoService } from './flujo_proceso.service';
import { FlujoProceso } from './entities/flujo_proceso.entity';
import { CreateFlujoProcesoInput } from './dto/inputs';

@Resolver(() => FlujoProceso)
export class FlujoProcesoResolver {
  constructor(private readonly FlujoProcesoService: FlujoProcesoService) {}

  @Mutation(() => FlujoProceso)
  async createFlujoProceso(
    @Args('createFlujoProcesoInput')
    createFlujoProcesoInput: CreateFlujoProcesoInput,
  ): Promise<FlujoProceso> {
    return this.FlujoProcesoService.create(createFlujoProcesoInput);
  }

  @Query(() => [FlujoProceso], { name: 'flujoprocesos' })
  async findAll(): Promise<FlujoProceso[]> {
    return this.FlujoProcesoService.findAll();
  }

  @Mutation(() => Boolean)
  async softDeleteFlujoProceso(@Args('id') id: string): Promise<boolean> {
    await this.FlujoProcesoService.softDelete(id);
    return true;
  }
}
