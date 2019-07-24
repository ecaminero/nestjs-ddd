import * as faker from 'faker';
import { has } from 'lodash';
import { Test } from '@nestjs/testing';
import { Model } from 'mongoose';
import { TestingModule } from '@nestjs/testing/testing-module';
import { USER_MODEL_PROVIDER } from '../../constants';
import { ADDRESS_MODEL_PROVIDER } from '../../constants';
import { SHOPPING_MODEL_PROVIDER } from '../../constants';
import { CreateUserDto } from '../dto/create-user.dto';
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
  let userModel: Model<User> = UserModel;
  let repository: UserRepository;

  beforeAll(async () => {
    userModel = UserModel;
    const providers = [{
        provide: USER_MODEL_PROVIDER,
        useValue: UserModel,
      },
      {
        provide: SHOPPING_MODEL_PROVIDER,
        useValue: ShoppingModel,
      },
      {
        provide: ADDRESS_MODEL_PROVIDER,
        useValue: AdressModel,
      },
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

  it('should create a user', async () => {
    const result: CreateUserDto = {
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
        productName: faker.commerce.productName(),
        price: faker.commerce.price(),
        productAdjective: faker.commerce.productAdjective(),
        productMaterial: faker.commerce.productMaterial(),
        product: faker.commerce.product(),
        department: faker.commerce.department(),
      }],
    };

    jest.spyOn(repository, 'create').mockImplementation(async () => result );
    const data = await service.create(result);
    expect(has(data , '_id')).toBeTruthy();
    expect(data._id).toBeDefined();
    Object.keys(data).forEach((key) => {
      expect(data[key]).toBe(result[key]);
    });
  });

  it('should get all user users', async () => {
    const randomNumber = Math.floor(Math.random() * 10);
    const userList: CreateUserDto[] = [];

    for (let index = 0; index <= randomNumber; index++) {
      const result: CreateUserDto = {
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
        _id: faker.random.uuid(),
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
