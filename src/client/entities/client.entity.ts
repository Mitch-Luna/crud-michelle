import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  nombre: string;

  @Column({ type: 'text' })
  apellido: string;

  @Column({ unique: true })
  correo: string;

  @Column({ type: 'numeric' })
  numero_telefono: number;

  @Column({ type: 'text' })
  direccion: string;
  
  @Column({ type: 'numeric' })
  edad: number;

  @Column({ type: 'text' })
  sexo: string;

}
