import * as faker from 'faker';
import { Test } from '@nestjs/testing';
import { Model } from 'mongoose';
import { has, cloneDeep } from 'lodash';
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

  it('should create an user', async () => {
    const user: User = {
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
    const newUser = cloneDeep(user);
    jest.spyOn(service, 'create').mockImplementation(async () => user);
    const data = await controller.create(newUser);
    expect(data).toBeDefined();
    expect(has(data , '_id')).toBeTruthy();
    Object.keys(data).forEach((key) => {
      expect(data[key]).toBe(user[key]);
    });
  });

});
