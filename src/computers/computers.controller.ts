import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseUUIDPipe,
    Patch,
    Post,
  } from '@nestjs/common';
  import { ComputersService } from './computers.service';
  import { CreateComputersDto } from './dto/computers.dto';
  
  @Controller('computers')
  export class ComputersController {
    constructor(private readonly computersServiceRepo: ComputersService) {}
  
    //Metodo para crear un producto
    @Post()
    create(@Body() productoDto: CreateComputersDto) {
      return this.computersServiceRepo.create(productoDto);
    }
  
    //Metodo para mostrar todos los productos
    @Get()
    findAll() {
      return this.computersServiceRepo.findAll();
    }
  
    //Metodo para mostrar un producto especifico
    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: string) {
      return this.computersServiceRepo.findOne(id);
    }
  
    //Eliminar un producto especifico
    @Delete(':id')
    remove(@Param('id', ParseUUIDPipe) id: string) {
      return this.computersServiceRepo.remove(id);
    }
  
    //Crear método patch, para actualizar
    @Patch(':id')
    update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() updateProductDto: CreateComputersDto
    ){
      return this.computersServiceRepo.update(id, updateProductDto);
    }
  }
  