// import { Injectable } from '@nestjs/common';
// import { CreatePersonaDto } from './dto/create-persona.dto';
// import { UpdatePersonaDto } from './dto/update-persona.dto';

// @Injectable()
// export class PersonaService {
//   create(createPersonaDto: CreatePersonaDto) {
//     return 'This action adds a new persona';
//   }

//   findAll() {
//     return `This action returns all persona`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} persona`;
//   }

//   update(id: number, updatePersonaDto: UpdatePersonaDto) {
//     return `This action updates a #${id} persona`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} persona`;
//   }
// }
import { OpcionDTO } from './dto/opcion.dto';
import { OPCION } from '../common/models/models';
import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IOpcion } from 'src/common/interfaces/opciones.interface';
import axios from 'axios';
import * as moment from 'moment';

@Injectable()
export class OpcionService {
  constructor(
    @InjectModel(OPCION.name)
    private readonly model: Model<IOpcion>,
  ) {}

  async create(opcionDTO: OpcionDTO): Promise<IOpcion> {
    const newOpcion = new this.model(opcionDTO);
    return await newOpcion.save();
  }

  async findAll(): Promise<IOpcion[]> {
    return await this.model.find();
  }

  async findOne(id: string): Promise<IOpcion> {
    return await this.model.findById(id);
  }

  async update(id: string, opcionDTO: OpcionDTO): Promise<IOpcion> {
    return await this.model.findByIdAndUpdate(id, opcionDTO, { new: true });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}
