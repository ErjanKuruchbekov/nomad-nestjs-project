import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  calculate() {
    return this.appService.calculate();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
