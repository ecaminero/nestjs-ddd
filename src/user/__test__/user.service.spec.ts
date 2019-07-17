import * as faker from 'faker';
import * as uuid from 'uuid/v4';
import { has } from 'lodash';
import { Test } from '@nestjs/testing';
import { Model } from 'mongoose';
import { TestingModule } from '@nestjs/testing/testing-module';
import { USER_MODEL_PROVIDER } from '../../constants';
import { UserService } from '../user.service';
import { User } from '../interfaces/user.interface';
import { UserEntity } from '../entities/user.entity';
import { UserRepository } from '../user.repository';

describe('User Controller', () => {
  let service: UserService;
  let userModel: Model<User> = UserEntity;
  let repository: UserRepository;

  beforeAll(async () => {
    userModel = UserEntity;

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
    const user: User = {
      id: uuid(),
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

    jest.spyOn(repository, 'create').mockImplementation(async () => user );
    const data = await service.create(user);
    expect(has(data , 'id')).toBeTruthy();
    expect(data.id).toBeDefined();
    Object.keys(data).forEach((key) => {
      expect(data[key]).toBe(user[key]);
    });
  });

  it('should get all user users', async () => {
    const randomNumber = Math.floor(Math.random() * 10);
    const userList: User[] = [];

    for (let index = 0; index <= randomNumber; index++) {
      const result: User = {
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
        id: uuid(),
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

    jest.spyOn(service, 'findAll').mockImplementation(async () => userList );
    const data = await service.findAll();
    expect(data.length).toBe(userList.length);
    data.forEach((element, index) => {
      expect(element.id).toBe(userList[index].id);
    });
  });

  it('should return Hello World!', async () => {

    const data = await service.getHello();
    expect(data).toBeDefined();
    expect(data).toBe('Hello World!');
  });
});
