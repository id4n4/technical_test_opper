import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { hostname } from 'os';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonaModule } from './persona/persona.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host: 'localhost',
      port: 3306,
      database: 'vehiculo_db',
      username: 'root',
      password: 'OneP1ece',
      autoLoadEntities: true
    }),
    PersonaModule,
    UsuariosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
