import { Test } from '@nestjs/testing';
import { Model } from 'mongoose';
import { TestingModule } from '@nestjs/testing/testing-module';
import { USER_MODEL_PROVIDER } from '../../constants';
import { UserService } from '../service/user.service';
import { User } from '../entities/user.entity';
import { UserModel } from '../../infrastructure/model/user.model';
import { UserRepository } from '../../infrastructure/repository/user.repository';

describe('User Controller', () => {
  let service: UserService;
  let userModel: Model<User> = UserModel;
  let repository: UserRepository;

  beforeAll(async () => {
    userModel = UserModel;

    const userProviders = {
      provide: USER_MODEL_PROVIDER,
      useValue: userModel,
    };

    const module: TestingModule = await Test
      .createTestingModule({
        providers: [
          UserService,
          UserRepository,
          userProviders,
        ],
      })
      .compile();

    service = module.get<UserService>(UserService);
    repository = module.get<UserRepository>(UserRepository);
  });

  it('should return Hello World!', async () => {
    const data = await service.getHello();
    expect(data).toBeDefined();
    expect(data).toBe('Hello World!');
  });
});
