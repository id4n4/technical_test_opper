import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuariosController } from "./controller/usuarios.controller";
import { Usuarios } from "./entities/usuarios.entity";
import { UsuarioService } from "./services/usuarios.service";

@Module({
    imports: [TypeOrmModule.forFeature([Usuarios])],
    providers: [UsuarioService],
    controllers: [UsuariosController]
})
export class UsuariosModule {
    
}