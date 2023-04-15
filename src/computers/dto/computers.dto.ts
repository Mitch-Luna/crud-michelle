import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  title: string;

  @IsNumber()
  @IsNotEmpty()
  marca: string;

  @IsNumber()
  @IsNotEmpty()
  precio: number;

  @IsNumber()
  @IsNotEmpty()
  procesador: string;

  @IsNumber()
  @IsNotEmpty()
  memoriaRAM: string;

  @IsNumber()
  @IsNotEmpty()
  SO: string;

  @IsNumber()
  @IsNotEmpty()
  tipo_de_disco: string;
}
