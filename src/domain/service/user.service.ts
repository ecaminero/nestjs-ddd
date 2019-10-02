import { Injectable, Inject } from '@nestjs/common';
import { User } from '@domain/entities/User';
import { CreateUserDto } from '@application/dto/create-user.dto';
import { UserRepository } from '@infrastructure/repository/user.repository';

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

  async find(): Promise<User[]> {
    return await this.userRepository.find();
  }
}
