import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EventEmitter } from 'events';

export const eventEmitter = new EventEmitter();
eventEmitter.addListener('tste', () => console.log(new Date() + ' tste'))

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  eventEmitter.emit('tste');
  await app.listen(3000);
}
bootstrap();
