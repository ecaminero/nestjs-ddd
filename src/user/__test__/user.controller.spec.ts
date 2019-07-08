import { Test } from '@nestjs/testing';
import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import { TestingModule } from '@nestjs/testing/testing-module';
import { UserController } from './../user.controller';
import { UserService } from './../user.service';
import { mockooseProviders } from './../../database/mockoose.providers';
import { DatabaseModule } from './../../database/database.module';
import { User } from './../interfaces/user.interface';
import { UserEntity } from './../entities/user.entity'

describe('User Controller', () => {
  let controller: UserController;
  let service: UserService;
  let userModel: Model<User>;
  const token = getModelToken(UserEntity);

  const DatabaseProvider = {
    provide: token,
    useFactory: async connection => connection.model('User', UserEntity),
    useValue: userModel,
    inject: ['MOCK_DATABASE_CONNECTION'],
  }

  beforeAll(async () => {
    const module: TestingModule = await Test
      .createTestingModule({
        controllers: [UserController],
        providers: [
          ...mockooseProviders,
          UserService
        ],
      })
      .compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  it('should be true', () => {
    expect(true).toBe(true);
  });

  it('should get users', async () => {
    console.log(await controller.findAll());
  });

});
