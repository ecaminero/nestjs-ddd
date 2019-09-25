import * as faker from 'faker';
import { Test } from '@nestjs/testing';
import { Model } from 'mongoose';
import { has } from 'lodash';
import { TestingModule } from '@nestjs/testing/testing-module';
import { UserController } from '../controller/user.controller';
import { UserService } from '../../domain/service/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserModel } from '../../infrastructure/models/user.model';
import { User } from '../../domain/entities/user.entity';
import { USER_MODEL_PROVIDER } from '../../constants';
import { UserRepository } from '../../infrastructure/repository/user.repository';

describe('User Controller', () => {
  let controller: UserController;
  let service: UserService;
  const userModel: Model<User> = UserModel;
  const randomNumber = Math.floor(Math.random() * 10);

  beforeAll(async () => {
    const userProviders = {
      provide: USER_MODEL_PROVIDER,
      useValue: userModel,
    };

    const module: TestingModule = await Test
      .createTestingModule({
        controllers: [UserController],
        providers: [
          UserService,
          UserRepository,
          userProviders,
        ],
      })
      .compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  it('should return Hello word', async () => {
    const data = await controller.get();

  });

});
