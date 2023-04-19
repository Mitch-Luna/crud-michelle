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

    @Post()
    create(@Body() computersDto: CreateComputersDto) {
      return this.computersServiceRepo.create(computersDto);
    }

    @Get()
    findAll() {
      return this.computersServiceRepo.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: string) {
      return this.computersServiceRepo.findOne(id);
    }
  
    @Delete(':id')
    remove(@Param('id', ParseUUIDPipe) id: string) {
      return this.computersServiceRepo.remove(id);
    }

    @Patch(':id')
    update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() updateComputersDto: CreateComputersDto
    ){
      return this.computersServiceRepo.update(id, updateComputersDto);
    }
  }
  