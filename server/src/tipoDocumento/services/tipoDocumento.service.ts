import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { TipoDocumento } from "../entities/tipoDocumento.entity";

@Injectable()
export class TipoDocumentoService extends BaseService<TipoDocumento>{
    constructor(@InjectRepository(TipoDocumento) private tipoDocumentoRepo: Repository<TipoDocumento>) {
        super();
    }
    getRepository(): Repository<TipoDocumento> {
        return this.tipoDocumentoRepo;
    }
    
}