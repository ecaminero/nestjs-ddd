import { Injectable, Inject } from '@nestjs/common';
import { User } from '@domain/entities/User';
import { UserModel } from '@infrastructure/models/User.model';
import { CreateUserDto } from '@application/dto/create-user.dto';
import { USER_MODEL_PROVIDER } from '@constants';

// Se inyecta el repo en el servicio
@Injectable()
export class UserRepository {
  constructor(@Inject(USER_MODEL_PROVIDER) private readonly model: User) {}

  async create(user: CreateUserDto): Promise<User> {
    const newUser = new UserModel(user);
    return await newUser;
  }

  async find(): Promise<User[]> {
    const allUser: User[] = [
      new UserModel({ name: 'Mertie', lastname: 'Beier', age: 10 }),
      new UserModel({name: 'Ana', lastname: 'Ziemann', age : 10}),
      new UserModel({name: 'Martha', lastname: 'Becerra', age : 10}),
    ];

    return await allUser;
  }
}
