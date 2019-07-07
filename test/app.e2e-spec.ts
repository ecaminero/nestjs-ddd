import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import * as mongoose from 'mongoose';
import * as request from 'supertest';
import * as faker from 'faker';

describe('AppController (e2e)', () => {
  let app: any;
  const userList = [];
  const num = 1000;

  for (let i: number = 1; i <= num; i++) {
    const user = {
      name: faker.name.findName(),
      lastname: faker.name.lastName(),
      age: faker.random.number(),
      picture: faker.image.imageUrl(),
      company: faker.company.companyName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      balance: faker.finance.amount(),
    };
    userList.push(user);
  }
  
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(() => {
    console.log('Done');
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
  
  userList.forEach((user) => {
    it('/ (POST)', () => {
      return request(app.getHttpServer())
        .post('/')
        .send(user)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .expect((r) => {
          console.log(r.body);
        });
    });
  });
});
