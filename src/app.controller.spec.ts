import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { sandwiches } from './app.service.helper';
import { NotFoundError } from 'rxjs';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get(AppController);
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('getSandwiches', () => {
    it('should return sandwich list', () => {
      const appController = app.get(AppController);
      expect(appController.getSandwiches()).toBe(sandwiches);
    });
  });

  describe('getSandwichById', () => {
    it('should return sandwich details based on id', () => {
      const appController = app.get(AppController);
      expect(appController.getSandwichById(1)).toBe(sandwiches[0]);
    });

    it('should return not found error if sandwich is not found', () => {
      const appController = app.get(AppController);
      expect(() => appController.getSandwichById(123)).toThrow(NotFoundError);
    });
  });
});
