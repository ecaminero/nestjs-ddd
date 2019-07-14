import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { USER_MODEL_PROVIDER } from '../constants';

// Se inyecta el repo en el servicio
@Injectable()
export class UserService {
  constructor(@Inject(USER_MODEL_PROVIDER) private readonly userModel: Model<User>) {}

  getHello(): string {
    return 'Hello World!';
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new this.userModel(createUserDto);
    return await user.save();
  }

  async findAll(): Promise<User[]> {
    const users = await this.userModel.findAll();
    return users;
  }
}
