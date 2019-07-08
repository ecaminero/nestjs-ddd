import { Test } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { TestingModule } from '@nestjs/testing/testing-module';
import { UserController } from './../user.controller';
import { UserService } from './../user.service';
import { userProviders } from './../user.provider';
import { DatabaseModule } from './../../database/database.module';

describe('User Controller', () => {
  let controller: UserController;
  let service: UserService;

  beforeAll(async () => {
    const mod: TestingModule = await Test
      .createTestingModule({
        imports: [DatabaseModule],
        controllers: [UserController],
        providers: [
          UserService,
          ...userProviders
        ],
      })
      .compile();

    controller = mod.get<UserController>(UserController);
    service = mod.get<UserService>(UserService);
  });

  it('should be true', () => {
    expect(true).toBe(true);
  });

  it('should get users', async () => {
    console.log(await controller.findAll());
  });

});
