import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuarios {
    
    @PrimaryGeneratedColumn()
    idUsuarios: number;

    @Column()
    usuario: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    rol: number;
}