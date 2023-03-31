import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Vehiculo } from "../entities/vehiculo.entity";

@Injectable()
export class VehiculoService extends BaseService<Vehiculo> {
    constructor(@InjectRepository(Vehiculo) private vehiculoRepo: Repository<Vehiculo>) {
        super();
    }
    getRepository(): Repository<Vehiculo> {
        return this.vehiculoRepo;
    }
    
}