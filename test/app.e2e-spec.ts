import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './../src/app.module';
import { INestApplication } from '@nestjs/common';
import { sandwiches } from '../src/app.service.helper';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/sandwiches (GET)', () => {
    return request(app.getHttpServer())
      .get('/sandwiches')
      .expect(200)
      .expect(sandwiches);
  });

  it('/sandwiches/:id (GET)', () => {
    return request(app.getHttpServer())
      .get('/sandwiches/1')
      .expect(200)
      .expect(sandwiches[0]);
  });
});
