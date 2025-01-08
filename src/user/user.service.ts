import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
      @InjectRepository(UserEntity)
      private readonly userRepository: Repository<UserEntity>,
    ) {}

    
create(createUserDto: CreateUserDto): Promise<UserEntity> {
  return this.userRepository.save(createUserDto);
}

  findAll(): Promise<UserEntity[]> {
    const tasksList = this.userRepository.find();
    return tasksList;
  }

  async findOne(id: number): Promise<UserEntity> {
    const user = await  this.userRepository
      .createQueryBuilder('user')
      .where('user.id = :id', {id})
      .addSelect('user.password', 'password')
      .getOne();

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {

    this.userRepository.update(id, updateUserDto);

    return this.findOne(id);
  }

  async remove(id: number): Promise<any> {
    await this.findOne(id);

    const task = this.userRepository.softDelete(id);
    return task;
  }
}
