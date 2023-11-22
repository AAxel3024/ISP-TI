// import { IsNotEmpty, IsString, IsMongoId } from "class-validator";

// export class CreateFlujoProcesoDto {

//     @IsNotEmpty({ message: 'El campo "name" es requerido' })
//     @IsString({ message: 'El campo "name" debe ser una cadena de caracteres' })
//     name: string;

//     @IsNotEmpty({ message: 'El campo "tipo_flujo_proceso_id" es requerido' })
//     @IsMongoId({ message: 'El campo "tipo_flujo_proceso_id" debe ser una id de mongo válida' })
//     tipo_flujo_proceso_id: string;

//     @IsNotEmpty({ message: 'El campo "opciones_id" es requerido' })
//     @IsMongoId({ message: 'El campo "opciones_id" debe ser una id de mongo válida' })
//     opciones_id: string;

// };
import { IsNotEmpty, IsString, IsMongoId, IsBoolean } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateFlujoProcesoInput {
  @IsNotEmpty({ message: 'El campo "name" es requerido' })
  @IsString({
    message: 'El campo "name" debe ser una cadena de caracteres',
  })
  @Field(() => String, { description: 'name campo' })
  name: string;

  @IsNotEmpty({ message: 'El campo "tipo_flujo_proceso_id" es requerido' })
  @IsMongoId({
    message:
      'El campo "tipo_flujo_proceso_id" debe ser una ID de MongoDB válida',
  })
  @Field(() => String, { description: 'ID de la persona' })
  tipo_flujo_proceso_id: string;

  @IsNotEmpty({ message: 'El campo "opciones_id" es requerido' })
  @IsMongoId({
    message: 'El campo "opciones_id" debe ser una ID de MongoDB válida',
  })
  @Field(() => String, { description: 'ID del proceso determinado' })
  opciones_id: string;

  @IsNotEmpty({ message: 'El campo "estado" es requerido' })
  @IsBoolean({
    message: 'El campo "estado" debe ser un boolean',
  })
  @Field(() => String, { description: 'estado del estado' })
  estado: string;
}
