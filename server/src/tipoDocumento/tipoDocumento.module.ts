import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TipoDocumentoController } from "./controllers/tipoDocumento.controller";
import { TipoDocumento } from "./entities/tipoDocumento.entity";
import { TipoDocumentoService } from "./services/tipoDocumento.service";

@Module({
    imports: [TypeOrmModule.forFeature([TipoDocumento])],
    providers: [TipoDocumentoService],
    controllers: [TipoDocumentoController]
})
export class TipoDocumentoModule {
    
}