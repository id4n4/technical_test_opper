import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Persona {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tipoDocumento: number;
    
    @Column()
    documento: number;
    
    @Column()
    nombres: string;
    
    @Column()
    apellidos: string;
    
    @Column()
    direccion: string;
    
    @Column()
    telefono: number;
    
    @Column()
    email: string;
}