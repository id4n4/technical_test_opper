import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vehiculo {

    @PrimaryGeneratedColumn()
    idVehiculo: number;

    @Column()
    placa: string;

    @Column()
    marca: string;

    @Column()
    modelo: string;

    @Column()
    año: number;

    @Column()
    color: string;

    @Column()
    arrendatario: number;

    @Column()
    observaciones: string;

    @Column()
    fechaRegistro: string;

    @Column()
    direccionUbicacion: string;

    @Column()
    ciudad: string;
}