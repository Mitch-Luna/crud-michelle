import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/computers.entity';
import { ComputersController } from './computers.controller';
import { ComputersService } from './computers.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ComputersController],
  providers: [ComputersService],
})
export class ComputersModule {}
