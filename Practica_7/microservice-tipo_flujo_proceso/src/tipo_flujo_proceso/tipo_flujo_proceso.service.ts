// import { Injectable } from '@nestjs/common';
// import { CreateProcesoDeterminadoDto } from './dto/proceso_determinado.dto';
// import { UpdateProcesoDeterminadoDto } from './dto/update-proceso_determinado.dto';

// @Injectable()
// export class ProcesoDeterminadoService {
//   create(createProcesoDeterminadoDto: CreateProcesoDeterminadoDto) {
//     return 'This action adds a new procesoDeterminado';
//   }

//   findAll() {
//     return `This action returns all procesoDeterminado`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} procesoDeterminado`;
//   }

//   update(id: number, updateProcesoDeterminadoDto: UpdateProcesoDeterminadoDto) {
//     return `This action updates a #${id} procesoDeterminado`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} procesoDeterminado`;
//   }
// }
import { TipoFlujoProcesoDTO } from './dto/tipo_flujo_proceso.dto';
import { TIPOFLUJOPROCESO } from './../common/models/models';
import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ITipoFlujoProceso } from 'src/common/interfaces/tipo_flujo_proceso.interface';
import axios from 'axios';
import * as moment from 'moment';

@Injectable()
export class TipoFlujoProcesoService {
  constructor(
    @InjectModel(TIPOFLUJOPROCESO.name)
    private readonly model: Model<ITipoFlujoProceso>,
  ) {}

  async create(
    tipoFlujoProcesoDTO: TipoFlujoProcesoDTO,
  ): Promise<ITipoFlujoProceso> {
    const newTipoFLujoProceso = new this.model(tipoFlujoProcesoDTO);
    return await newTipoFLujoProceso.save();
  }

  async findAll(): Promise<ITipoFlujoProceso[]> {
    return await this.model.find();
  }

  async findOne(id: string): Promise<ITipoFlujoProceso> {
    return await this.model.findById(id);
  }

  async update(
    id: string,
    tipoFlujoProcesoDTO: TipoFlujoProcesoDTO,
  ): Promise<ITipoFlujoProceso> {
    return await this.model.findByIdAndUpdate(id, tipoFlujoProcesoDTO, {
      new: true,
    });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}
