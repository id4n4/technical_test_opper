import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { hostname } from 'os';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonaModule } from './persona/persona.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RolesModule } from './roles/roles.module';
import { TipoDocumentoModule } from './tipoDocumento/tipoDocumento.module';
import { VehiculoModule } from './vehiculo/vehiculo.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CorsInterceptor } from './cors.interceptor';

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
    UsuariosModule,
    RolesModule,
    TipoDocumentoModule,
    VehiculoModule
  ],
  controllers: [AppController],
  providers: [AppService,
  {
    provide: APP_INTERCEPTOR,
    useClass: CorsInterceptor,
  }],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {}
}
