import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/sandwiches')
  getSandwiches() {
    return this.appService.getSandwiches();
  }

  @Get('/sandwiches/:id')
  getSandwichById(@Param('id', ParseIntPipe) id: number) {
    return this.appService.getSandwichById(id);
  }
}
