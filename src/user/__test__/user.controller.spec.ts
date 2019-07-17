import * as faker from 'faker';
import * as uuid from 'uuid/v4';
import { Test } from '@nestjs/testing';
import { Model } from 'mongoose';
import { has } from 'lodash';
import { TestingModule } from '@nestjs/testing/testing-module';
import { UserController } from './../user.controller';
import { UserService } from './../user.service';
import { User } from './../interfaces/user.interface';
import { UserEntity } from './../entities/user.entity';
import { USER_MODEL_PROVIDER } from './../../constants';
import { UserRepository } from '../user.repository';

describe('User Controller', () => {
  let controller: UserController;
  let service: UserService;
  const userModel: Model<User> = UserEntity;
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

  it('should return all user registered', async () => {
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
    const data = await controller.findAll();
    expect(data.length).toBe(userList.length);
    data.forEach((element, index) => {
      expect(element.id).toBe(userList[index].id);
    });
  });

  it('should create an user', async () => {
    const user: User = {
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

    jest.spyOn(service, 'create').mockImplementation(async () => user );
    const data = await controller.create(user);
    expect(has(data , 'id')).toBeTruthy();
    expect(data.id).toBeDefined();
    Object.keys(data).forEach((key) => {
      expect(data[key]).toBe(user[key]);
    });
  });

});
