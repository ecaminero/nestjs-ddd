import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import * as request from 'supertest';
import * as faker from 'faker';
jest.setTimeout(30000);

describe('AppController (e2e)', () => {
  let app: any;
  const cantRequest: number = 10;
  function generateData(limit: number) {
    const userList = [];

    for (let i: number = 1; i <= limit; i++) {
      const user = {
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
        id: faker.random.uuid(),
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
        shopping: [],
      };
      const numbers =  Math.floor(Math.random() * (1 - 10 + 1) + 10);
      // tslint:disable-next-line: no-shadowed-variable
      for (let i: number = 0; i < numbers; i++) {
        user.shopping.push({
          productName: faker.commerce.productName(),
          price: faker.commerce.price(),
          productAdjective: faker.commerce.productAdjective(),
          productMaterial: faker.commerce.productMaterial(),
          product: faker.commerce.product(),
          department: faker.commerce.department(),
        });
      }
      userList.push(user);
    }
    return userList;
  }

  function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  beforeAll(async () => {
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
      .get('/hello')
      .expect(200)
      .expect('Hello World!');
  });

  generateData(cantRequest).forEach(async (user, index) => {
    const expected = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

    it('/ (POST)', async () => {
      if (index > 0 && Math.round(index % 10) === 0) {
        const wait = 2 * 100;
        console.log(`index ${index} *** wait *** ${wait} `);
        await delay(wait);
      }
      return request(app.getHttpServer())
        .post('/')
        .send(user)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .expect((r) => {
          expect(r.body._id).toBeDefined();
          expect(r.body._id).toEqual(expect.not.stringMatching(expected));
          expect(r.body.name).toEqual(user.name);
          expect(r.body.lastname).toEqual(user.lastname);
          expect(r.body.ipv6).toEqual(user.ipv6);
          expect(r.body.picture).toEqual(user.picture);
          expect(r.body.company).toEqual(user.company);
          expect(r.body.phone).toEqual(user.phone);
          expect(r.body.email).toEqual(user.email);
        });

    });
  });
});
