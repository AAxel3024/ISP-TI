import { Test, TestingModule } from '@nestjs/testing';
import { TipoFlujoProcesoService } from './tipo_flujo_proceso.service';
import { Model } from 'mongoose';
import { TipoFlujoProceso, TipoFlujoProcesoDocument } from './schema/tipo_flujo_proceso.schema';
import { getModelToken } from '@nestjs/mongoose';

describe('TipoFlujoProcesoService', () => {
  let service: TipoFlujoProcesoService;
  let model: Model<TipoFlujoProcesoDocument>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TipoFlujoProcesoService,
        {
          provide: getModelToken(TipoFlujoProceso.name),
          useValue: Model, // Asegúrate de que aquí esté configurado correctamente
        },
      ],
    }).compile();

    service = module.get<TipoFlujoProcesoService>(TipoFlujoProcesoService);
    model = module.get<Model<TipoFlujoProcesoDocument>>(getModelToken(TipoFlujoProceso.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
