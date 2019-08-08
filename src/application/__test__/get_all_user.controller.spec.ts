import * as faker from 'faker';
import { Test } from '@nestjs/testing';
import { Model } from 'mongoose';
import { has } from 'lodash';
import { TestingModule } from '@nestjs/testing/testing-module';
import { UserController } from '../controller/user.controller';
import { UserService } from '../../domain/service/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserModel } from '../../infrastructure/model/user.model';
import { User } from '../../domain/entities/user.entity';
import { USER_MODEL_PROVIDER } from '../../constants';
import { UserRepository } from '../../infrastructure/repository/user.repository';

describe('User Controller', () => {
  let controller: UserController;
  let service: UserService;
  const userModel: Model<User> = UserModel;
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
          _id: faker.random.uuid(),
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
    const data = await controller.findAll();
    expect(data.length).toBe(userList.length);
    data.forEach((element, index) => {
      expect(has(element , '_id')).toBeTruthy();
      expect(element.name).toBe(userList[index].name);
    });
  });

  it('should return Hello word', async () => {
    const data = await controller.get();
    expect(data).toBeDefined();
    expect(data).toBe('Hello World!');
  });

});
