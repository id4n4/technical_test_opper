import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Vehiculo } from "../entities/vehiculo.entity";
import { VehiculoService } from "../services/vehiculo.service";

@Controller('api/vehiculo')
export class VehiculoController extends BaseController<Vehiculo> {
    constructor(private readonly vehiculoService: VehiculoService) {
        super();
    }
    getService(): BaseService<Vehiculo> {
        return this.vehiculoService;
    }

}