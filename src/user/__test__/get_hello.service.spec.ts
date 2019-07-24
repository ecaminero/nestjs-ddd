import * as faker from 'faker';
import { Test } from '@nestjs/testing';
import { Model } from 'mongoose';
import { TestingModule } from '@nestjs/testing/testing-module';
import { USER_MODEL_PROVIDER } from '../../constants';
import { ADDRESS_MODEL_PROVIDER } from '../../constants';
import { SHOPPING_MODEL_PROVIDER } from '../../constants';
import { UserService } from '../user.service';
import { User } from '../entity/user.entity';
import { UserModel } from '../model/user.model';
import { ShoppingModel } from '../model/shopping.model';
import { AdressModel } from '../model/address.model';
import { UserRepository } from '../repository/user.repository';
import { AddressRepository } from '../repository/address.repository';
import { ShoppingRepository } from '../repository/shopping.repository';
describe('User Controller', () => {
  let service: UserService;
  let repository: UserRepository;

  beforeAll(async () => {
    const providers = [
      { provide: USER_MODEL_PROVIDER, useValue: UserModel },
      { provide: SHOPPING_MODEL_PROVIDER, useValue: ShoppingModel },
      { provide: ADDRESS_MODEL_PROVIDER, useValue: AdressModel },
    ];

    const module: TestingModule = await Test
      .createTestingModule({
        providers: [
          UserService,
          UserRepository,
          ShoppingRepository,
          AddressRepository,
          ...providers,
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
