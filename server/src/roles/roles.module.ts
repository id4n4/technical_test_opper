import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RolesController } from "./controllers/roles.controller";
import { Roles } from "./entities/roles.entity";
import { RolesService } from "./services/roles.service";

@Module({
    imports: [TypeOrmModule.forFeature([Roles])],
    providers: [RolesService],
    controllers: [RolesController]
})
export class RolesModule{
    
}