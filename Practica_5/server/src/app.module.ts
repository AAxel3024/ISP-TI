import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CiudadModule } from './ciudad/ciudad.module';
import { RolesModule } from './roles/roles.module';
import { PersonaModule } from './persona/persona.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { DocumentoModule } from './documento/documento.module';
import { DepartamentoUsuarioModule } from './departamento_usuario/departamento_usuario.module';
import { SolicitudBajaModule } from './solicitud_baja/solicitud_baja.module';
import { ProcesoDeterminadoModule } from './proceso_determinado/proceso_determinado.module';
import { FlujoProcesoModule } from './flujo_proceso/flujo_proceso.module';
import { ProcesoModule } from './proceso/proceso.module';
import { TipoFlujoProcesoModule } from './tipo_flujo_proceso/tipo_flujo_proceso.module';
import { OpcionesModule } from './opciones/opciones.module';
import config from './config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MensajeUserModule } from './mensaje_user/mensaje_user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({  
  imports: [
    
    ConfigModule.forRoot({
      envFilePath:['.develop.env'],
      isGlobal:true
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      // entities: [__dirname + '/**/*.entity{.ts,.js}'], // Ruta a tus entidades MongoDB
      synchronize: true, // En desarrollo, puedes establecerlo en true, pero en producción, es mejor desactivarlo
    }),
    // MongooseModule.forRoot('mongodb+srv://jjrz1350517171:1350517171@cluster0.ezxkxg9.mongodb.net/'),
    // MongooseModule.forRoot('mongodb://mongo:27017/cbm'),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: `mongodb+srv://${configService.get('MONGO_USERNAME')}:${configService.get('MONGO_PASSWORD')}@${configService.get('MONGO_HOST')}/${configService.get('MONGO_DB')}`,
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    UserModule,
    CiudadModule,
    RolesModule,
    PersonaModule,
    DepartamentoModule,
    DocumentoModule,
    DepartamentoUsuarioModule,
    SolicitudBajaModule,
    ProcesoDeterminadoModule,
    FlujoProcesoModule,
    ProcesoModule,
    TipoFlujoProcesoModule,
    OpcionesModule,
    MensajeUserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
