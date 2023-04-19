import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Computers} from './entities/computers.entity';
import { CreateComputersDto } from './dto/computers.dto';

@Injectable()
export class ComputersService {
  constructor(
    @InjectRepository(Computers)
    private readonly computersRepository: Repository<Computers>,
  ) {}

  async create(clientDto: CreateComputersDto) {
    const computers = this.computersRepository.create(clientDto);
    await this.computersRepository.save(computers);

    return computers;
  }

 
  findAll() {
    return this.computersRepository.find();
  }

  findOne(id: string) {
    return this.computersRepository.findOneBy({ id });
  }

  async remove(id: string) {
    const computers = await this.findOne(id);
    await this.computersRepository.remove(computers);
    return 'Computadora eliminado satisfactoriamente';
  }

  async update(id: string, cambios: CreateComputersDto) {
    const findComputers = await this.findOne(id);
    const updatedComputers = await this.computersRepository.merge(
      findComputers,
      cambios,
    );

    return this.computersRepository.save(updatedComputers);
  }
}
