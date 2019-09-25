import * as faker from 'faker';
import { Test } from '@nestjs/testing';
import { Model } from 'mongoose';
import { TestingModule } from '@nestjs/testing/testing-module';
import { USER_MODEL_PROVIDER } from '../../constants';
import { UserService } from '../service/user.service';
import { User } from '../entities/user.entity';
import { UserModel } from '../../infrastructure/models/user.model';
import { UserRepository } from '../../infrastructure/repository/user.repository';

describe('User Controller', () => {
  let service: UserService;
  let userModel: Model<User> = UserModel;
  let repository: UserRepository;
  const randomNumber = Math.floor(Math.random() * 10);

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
    const userList: User[] = [];

    for (let index = 0; index <= randomNumber; index++) {
      const user = {
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
      userList.push(user);
    }

    jest.spyOn(repository, 'find').mockImplementation(async () => userList);
    const data = await service.find();
    expect(data.length).toBe(userList.length);
    data.forEach((element, index) => {
      expect(element.name).toBe(userList[index].name);
    });
  });
  it('should return Hello World!', async () => {
    const data = await service.getHello();
    expect(data).toBeDefined();
    expect(data).toBe('Hello World!');
  });
});
