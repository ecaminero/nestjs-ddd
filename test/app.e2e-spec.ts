import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import * as request from 'supertest';
import * as faker from 'faker';
jest.setTimeout(30000);

describe('AppController (e2e)', () => {
  let app: any;
  const expected = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  function generateData() {
    const user = {
      name: faker.name.findName(),
      lastname: faker.name.lastName(),
      age: faker.random.number(),
    };
    return user;
  }

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(() => { console.log('Done'); });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/hello')
      .expect(200)
      .expect('Hello World!');
  });

  it('/ (POST)', async () => {
    const user =  generateData();
    return request(app.getHttpServer())
      .post('/')
      .send(user)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .expect((r) => {
        expect(r.body._id).toBeDefined();
        expect(r.body.name).toEqual(user.name);
        expect(r.body.lastname).toEqual(user.lastname);
        expect(r.body.age).toEqual(user.age);
      });
  });
});
