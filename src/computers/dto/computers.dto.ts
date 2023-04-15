import { IsAlphanumeric, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateComputersDto {

  @IsNotEmpty()
  marca: string;

  @IsNumber()
  @IsNotEmpty()
  precio: number;

  @IsAlphanumeric()
  procesador: string;

  @IsAlphanumeric()
  memoriaRAM: string;

  @IsString()
  SO: string;

  @IsString()
  tipo_de_disco: string;
}
