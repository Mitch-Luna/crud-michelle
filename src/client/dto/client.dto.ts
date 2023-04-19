import { IsAlphanumeric, IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateClientDto {

  @IsString()
  nombre: string;

  @IsString()
  apellido: string;

  @IsEmail()
  correo: string;

  @IsNumber()
  numero_telefono: number;

  @IsAlphanumeric()
  direccion: string;

  @IsNumber()
  edad: number;

  @IsString()
  sexo: string
}
