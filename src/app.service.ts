import { Injectable } from '@nestjs/common';
import { sandwiches } from './app.service.helper';
import { NotFoundError } from 'rxjs';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getSandwiches() {
    return sandwiches;
  }

  getSandwichById(id: number) {
    const sandwich = sandwiches.find((sandwich) => sandwich.id === id);
    if (!sandwich) {
      throw new NotFoundError('Sandwich was not found');
    }
    return sandwich;
  }
}
