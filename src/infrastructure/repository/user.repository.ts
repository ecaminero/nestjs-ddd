import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from '@domain/entities/user.entity';
import { CreateUserDto } from '@application/dto/create-user.dto';
import { USER_MODEL_PROVIDER } from '@constants';

// Se inyecta el repo en el servicio
@Injectable()
export class UserRepository {
  constructor(@Inject(USER_MODEL_PROVIDER) private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new this.userModel(createUserDto);
    return await user.save();
  }

  async find(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
}
