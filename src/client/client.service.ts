import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client} from './entities/client.entity';
import { CreateClientDto } from './dto/client.dto';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async create(clientDto: CreateClientDto) {
    const client = this.clientRepository.create(clientDto);
    await this.clientRepository.save(client);

    return client;
  }

  findAll() {
    return this.clientRepository.find();
  }

  findOne(id: string) {
    return this.clientRepository.findOneBy({ id });
  }

  async remove(id: string) {
    const client = await this.findOne(id);
    await this.clientRepository.remove(client);
    return 'Cliente eliminado satisfactoriamente';
  }


  async update(id: string, cambios: CreateClientDto) {
    const findClient = await this.findOne(id);
    const updatedClient = await this.clientRepository.merge(
      findClient,
      cambios,
    );

    return this.clientRepository.save(updatedClient);
  }
}
