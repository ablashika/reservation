import { NestFactory } from '@nestjs/core';
import { ReservationsModule } from './reservations/reservations.module';

async function bootstrap() {
  const app = await NestFactory.create(ReservationsModule);
  await app.listen(4000);
}
bootstrap();