import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { eventEmitter } from './main';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    eventEmitter.emit('tste')
    return this.appService.getHello();
  }
}
