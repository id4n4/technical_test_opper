import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { TipoDocumento } from "../entities/tipoDocumento.entity";
import { TipoDocumentoService } from "../services/tipoDocumento.service";

@Controller('api/tipoDocumento')
export class TipoDocumentoController extends BaseController<TipoDocumento>{
    constructor(private readonly tipoDocumentoService: TipoDocumentoService) {
        super();
    }
    getService(): BaseService<TipoDocumento> {
        return this.tipoDocumentoService;
    }
    
}