import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { VehiculoController } from "./controllers/vehiculo.controller";
import { Vehiculo } from "./entities/vehiculo.entity";
import { VehiculoService } from "./services/vehiculo.service";

@Module({
    imports: [TypeOrmModule.forFeature([Vehiculo])],
    providers: [VehiculoService],
    controllers: [VehiculoController]
})
export class VehiculoModule {
    
}