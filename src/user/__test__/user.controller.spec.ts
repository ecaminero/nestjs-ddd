import { Test } from '@nestjs/testing';
import { Model } from 'mongoose';
import { MongoClient, Connection } from 'mongodb';
import { getModelToken } from '@nestjs/mongoose';
import { TestingModule } from '@nestjs/testing/testing-module';
import { UserController } from './../user.controller';
import { UserService } from './../user.service';
import { User } from './../interfaces/user.interface';
import { UserEntity } from './../entities/user.entity';

describe('User Controller', () => {
  let controller: UserController;
  let service: UserService;
  let userModel: User;

  const connectionProvider = {
    provide: 'MOCK_DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof MongoClient> =>
      await MongoClient.connect('mongodb://localhost/testing', { useNewUrlParser: true }),
  };

  const userProviders = {
    provide: 'USER_MODEL',
    useValue: userModel,
  };

  beforeAll(async () => {
    const module: TestingModule = await Test
      .createTestingModule({
        controllers: [UserController],
        providers: [
          UserService,
          userProviders,
        ],
      })
      .compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });


  it('should be true', () => {
    expect(true).toBe(true);
  });

  fit('should get users', async () => {
    console.log(getModelToken('User'));
    console.log(await controller.findAll());
  });

});
