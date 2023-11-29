// import { Injectable } from "@nestjs/common";
// import { CreateDocumentoDto } from "./dto/documento.dto";
// import { UpdateDocumentoDto } from "./dto/update-documento.dto";

// @Injectable()
// export class DocumentoService {
//   create(createDocumentoDto: CreateDocumentoDto) {
//     return "This action adds a new documento";
//   }

//   findAll() {
//     return `This action returns all documento`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} documento`;
//   }

//   update(id: number, updateDocumentoDto: UpdateDocumentoDto) {
//     return `This action updates a #${id} documento`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} documento`;
//   }
// }
import { FlujoProcesoDTO } from './dto/flujo_proceso.dto';
import { FLUJOPROCESO } from '../common/models/models';
import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IFlujoProceso } from 'src/common/interfaces/flujo_proceso.interface';
import axios from 'axios';
import * as moment from 'moment';

@Injectable()
export class FLujoProcesoService {
  constructor(
    @InjectModel(FLUJOPROCESO.name)
    private readonly model: Model<IFlujoProceso>,
  ) {}

  async create(flujoProcesoDTO: FlujoProcesoDTO): Promise<IFlujoProceso> {
    const newFlujoProceso= new this.model(flujoProcesoDTO);
    return await newFlujoProceso.save();
  }

  async findAll(): Promise<IFlujoProceso[]> {
    return await this.model.find()
  }

  async findOne(id: string): Promise<IFlujoProceso> {
    return await this.model.findById(id)
  }

  async update(id: string, flujoProcesoDTO: FlujoProcesoDTO): Promise<IFlujoProceso> {
    return await this.model.findByIdAndUpdate(id, flujoProcesoDTO, { new: true });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}
