import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Roles {

    @PrimaryGeneratedColumn()
    idRoles: number;

    @Column()
    roles: string;
}