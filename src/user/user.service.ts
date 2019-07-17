import { Injectable, Inject } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';

// Se inyecta el repo en el servicio
@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  getHello(): string {
    return 'Hello World!';
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.create(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }
}
