import * as faker from 'faker';
import { cloneDeep } from 'lodash';
import { Test } from '@nestjs/testing';
import { Model } from 'mongoose';
import { TestingModule } from '@nestjs/testing/testing-module';
import { USER_MODEL_PROVIDER } from '@constants';
import { UserService } from '@domain/services/user.service';
import { User } from '@domain/entities/User';
import { UserModel } from '@infrastructure/models/User.model';
import { UserRepository } from '@infrastructure/repository/user.repository';

describe('User Service', () => {
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

  it('should create a user', async () => {
    const user = {
      _id: faker.random.uuid(),
      name: faker.name.findName(),
      lastname: faker.name.lastName(),
      age: faker.random.number(),
    };

    const newUser = cloneDeep(user);
    jest.spyOn(repository, 'create').mockImplementation(async () => user);
    const data = await service.create(newUser);
    expect(data).toBeDefined();
    expect(data._id).toBeDefined();
    Object.keys(data).forEach((key) => {
      expect(data[key]).toBe(user[key]);
    });
  });
});
