import * as faker from 'faker';
import { Test } from '@nestjs/testing';
import { has } from 'lodash';
import { TestingModule } from '@nestjs/testing/testing-module';
import { USER_MODEL_PROVIDER } from '../../constants';
import { ADDRESS_MODEL_PROVIDER } from '../../constants';
import { SHOPPING_MODEL_PROVIDER } from '../../constants';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserService } from '../user.service';
import { UserModel } from '../model/user.model';
import { ShoppingModel } from '../model/shopping.model';
import { AdressModel } from '../model/address.model';
import { UserRepository } from '../repository/user.repository';
import { AddressRepository } from '../repository/address.repository';
import { ShoppingRepository } from '../repository/shopping.repository';
import { UserController } from './../controller/user.controller';

describe('User Controller', () => {
  let controller: UserController;
  let service: UserService;

  beforeAll(async () => {
    const providers = [
      { provide: USER_MODEL_PROVIDER, useValue: UserModel },
      { provide: SHOPPING_MODEL_PROVIDER, useValue: ShoppingModel },
      { provide: ADDRESS_MODEL_PROVIDER, useValue: AdressModel },
    ];

    const module: TestingModule = await Test
      .createTestingModule({
        controllers: [UserController],
        providers: [
          UserService,
          UserRepository,
          ShoppingRepository,
          AddressRepository,
          ...providers,
        ],
      })
      .compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  it('should create an user', async () => {
    const user: CreateUserDto = {
      _id: faker.random.uuid(),
      name: faker.name.findName(),
      lastname: faker.name.lastName(),
      age: faker.random.number(),
      picture: faker.image.imageUrl(),
      company: faker.company.companyName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      balance: faker.finance.amount(),
      jobTitle: faker.name.jobTitle(),
      avatar: faker.image.avatar(),
      ipv6: faker.internet.ipv6(),
      finance: {
        account: faker.finance.account(),
        accountName: faker.finance.accountName(),
      },
      address: {
        zipCode: faker.address.zipCode(),
        city: faker.address.city(),
        streetAddress: faker.address.streetAddress(),
        country: faker.address.country(),
      },
      shopping: [{
        _id: faker.random.uuid(),
        productName: faker.commerce.productName(),
        price: faker.commerce.price(),
        productAdjective: faker.commerce.productAdjective(),
        productMaterial: faker.commerce.productMaterial(),
        product: faker.commerce.product(),
        department: faker.commerce.department(),
      }],
    };

    jest.spyOn(service, 'create').mockImplementation(async () => user );
    const data = await controller.create(user);
    expect(has(data , '_id')).toBeTruthy();
    expect(data._id).toBeDefined();
    Object.keys(data).forEach((key) => {
      expect(data[key]).toBe(user[key]);
    });
  });

});
