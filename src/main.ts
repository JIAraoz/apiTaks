import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AllExeptionFilter } from './common/filters/http-exeption.filter';
import { TimeOutInterceptor } from './common/interceptors/timeout.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalFilters(new AllExeptionFilter());
  app.useGlobalInterceptors(new TimeOutInterceptor())
  await app.listen(3000);
}
bootstrap();
 
