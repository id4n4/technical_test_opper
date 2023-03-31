import { Controller, Get, Param } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Usuarios } from "../entities/usuarios.entity";
import { UsuarioService } from "../services/usuarios.service";

@Controller('api/usuarios')
export class UsuariosController extends BaseController<Usuarios>{
    constructor(private readonly usuariosService: UsuarioService) {
        super();
    }
    getService(): BaseService<Usuarios> {
        return this.usuariosService;
    }

    // Login
    @Get('login/:user/:password')
    async login(
        @Param('user') user: string,
        @Param('password') password: string,
    ): Promise<Usuarios> {
        return await this.usuariosService.login(user,password);
    }
}