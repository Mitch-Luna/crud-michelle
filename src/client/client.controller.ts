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
  import { ClientService } from './client.service';
  import { CreateClientDto } from './dto/client.dto';
  
  @Controller('client')
  export class ClientController {
    constructor(private readonly clientServiceRepo: ClientService) {}
 
    @Post()
    create(@Body() clientDto: CreateClientDto) {
      return this.clientServiceRepo.create(clientDto);
    }

    @Get()
    findAll() {
      return this.clientServiceRepo.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: string) {
      return this.clientServiceRepo.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id', ParseUUIDPipe) id: string) {
      return this.clientServiceRepo.remove(id);
    }

    @Patch(':id')
    update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() updateClientDto: CreateClientDto
    ){
      return this.clientServiceRepo.update(id, updateClientDto);
    }
  }
  