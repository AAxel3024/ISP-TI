// export class FlujoProceso {}

import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType()
@Entity()
export class FlujoProceso {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  tipo_flujo_proceso_id: string;

  @Column()
  @Field(() => String)
  proceso_determinado_id: string;

  @Column({ default: true }) // Por defecto, el estado es verdadero
  @Field(() => Boolean)
  estado: boolean;
}
