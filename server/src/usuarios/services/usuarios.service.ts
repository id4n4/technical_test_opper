import { Injectable } from "@nestjs/common/decorators";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Usuarios } from "../entities/usuarios.entity";

@Injectable()
export class UsuarioService extends BaseService<Usuarios> {
    
    constructor(@InjectRepository(Usuarios) private usuariosRepo : Repository<Usuarios>){
        super();
    }
    getRepository(): Repository<Usuarios> {
        return this.usuariosRepo;
    }

    //Login
    async login(user: string, password: any): Promise<Usuarios> {
        const queryBuilder = this.usuariosRepo.createQueryBuilder();
        const entity = await queryBuilder
            .select()
            .where(`usuario = :user`,{user})
            .andWhere(`password = :password`,{password})
            .getOne();

        return entity;
    }

}