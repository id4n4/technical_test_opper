import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TipoDocumento{

    @PrimaryGeneratedColumn()
    idDocumento: number;

    @Column()
    documento: string;
}