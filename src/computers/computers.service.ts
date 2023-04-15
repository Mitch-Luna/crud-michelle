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

  //Metodo para crear un producto
  async create(productoDto: CreateComputersDto) {
    const product = this.computersRepository.create(productoDto);
    await this.computersRepository.save(product);

    return product;
  }

  //Metodo para visualizar todos los productos
  findAll() {
    return this.computersRepository.find();
  }

  //Metodo para visualizar un producto especifico
  findOne(id: string) {
    return this.computersRepository.findOneBy({ id });
  }

  //Remover un producto especifico
  async remove(id: string) {
    const product = await this.findOne(id);
    await this.computersRepository.remove(product);
    return 'Producto eliminado satisfactoriamente';
  }

  //Actualizar un producto especifico
  async update(id: string, cambios: CreateComputersDto) {
    const findProduct = await this.findOne(id);
    const updatedProducto = await this.computersRepository.merge(
      findProduct,
      cambios,
    );

    return this.computersRepository.save(updatedProducto);
  }
}
