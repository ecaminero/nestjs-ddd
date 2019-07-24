import * as faker from 'faker';
import * as uuid from 'uuid/v4';
import { Test } from '@nestjs/testing';
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

  it('should get all user users', async () => {
    const randomNumber = Math.floor(Math.random() * 10);
    const userList: CreateUserDto[] = [];

    for (let index = 0; index <= randomNumber; index++) {
      const result: CreateUserDto = {
        _id: uuid(),
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
      userList.push(result);
    }

    jest.spyOn(service, 'find').mockImplementation(async () => userList );
    const data = await service.find();
    expect(data.length).toBe(userList.length);
    data.forEach((element, index) => {
      expect(element._id).toBe(userList[index]._id);
    });
  });

});
