import { Test, TestingModule } from '@nestjs/testing';
import { FlujoProcesoService } from './flujo_proceso.service';
import { FlujoProceso, FlujoProcesoDocument } from './schema/flujo_proceso.schema';
import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import { NotFoundException } from '@nestjs/common';
import { UpdateFlujoProcesoDto } from './dto/update-flujo_proceso.dto';

describe('FlujoProcesoService', () => {
  let service: FlujoProcesoService;
  let model: Model<FlujoProcesoDocument>;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FlujoProcesoService,
        {
          provide: getModelToken(FlujoProceso.name),
          useValue: Model, // Asegúrate de que aquí esté configurado correctamente
        },
      ],
    }).compile();

    service = module.get<FlujoProcesoService>(FlujoProcesoService);
    model = module.get<Model<FlujoProcesoDocument>>(getModelToken(FlujoProceso.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('findByIdFlujoProceso', () => {
    it('should return a Document object when given a valid id', async () => {
      // Arrange
      const mockId = 'valid-id';
      const mockProcesoDet = new FlujoProceso();
      jest.spyOn(model, 'findById').mockResolvedValueOnce(mockProcesoDet);

      // Act
      const result = await service.findByIdFlujoProceso(mockId);

      // Assert
      expect(result).toEqual(mockProcesoDet);
    });

    it('should throw a NotFoundException when given an invalid id', async () => {
      // Arrange
      const mockId = 'invalid-id';
      jest.spyOn(model, 'findById').mockResolvedValueOnce(null);

      // Act and Assert
      await expect(service.findByIdFlujoProceso(mockId)).rejects.toThrowError(NotFoundException);
    });
  });
  
  describe('updateFlujoProceso', () => {
    it('should update a role when provided a valid id and data', async () => {
      // Arrange
      const mockId = 'valid-id';
      const mockUpdateRoleDto: UpdateFlujoProcesoDto = {
        // Provide the properties you want to update
      };
      const mockUpdatedRole = new FlujoProceso(); // You can create a mock Role object here
      jest.spyOn(model, 'findOne').mockResolvedValueOnce(mockUpdatedRole);
      jest.spyOn(model, 'findByIdAndUpdate').mockResolvedValueOnce(mockUpdatedRole);

      // Act
      const result = await service.updateFlujoProceso(mockId, mockUpdateRoleDto);

      // Assert
      expect(result).toEqual(mockUpdatedRole);
    });
  });
  describe('removeFlujoProceso', () => {
    it('should remove a role when provided a valid id', async () => {
      // Arrange
      const mockId = 'valid-id';
      const mockRemovedRole = new FlujoProceso(); // You can create a mock Role object here
      jest.spyOn(model, 'findById').mockResolvedValueOnce(mockRemovedRole);
      jest.spyOn(model, 'findByIdAndDelete').mockResolvedValueOnce(mockRemovedRole);

      // Act
      const result = await service.removeFlujoProceso(mockId);

      // Assert
      expect(result).toEqual(mockRemovedRole);
    });
  });
});