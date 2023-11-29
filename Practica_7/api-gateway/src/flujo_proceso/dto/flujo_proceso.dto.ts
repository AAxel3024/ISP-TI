import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class FlujoProcesoDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nombre: string;
}
