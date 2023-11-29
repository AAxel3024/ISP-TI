import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class TipoFlujoProcesoDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nombre: string;
}
