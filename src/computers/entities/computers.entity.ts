import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  marca: string;

  @Column({ type: 'numeric' })
  precio: number;

  @Column({ type: 'text' })
  procesador: string;

  @Column({ type: 'text' })
  memoriaRAM: string;

  @Column({ type: 'text' })
  SO: string;

  @Column({ type: 'text' })
  tipo_de_disco: string;
}
