import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { PrismaModule } from '@prisma/client'
import { ValidationPipe } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ClassSerializerInterceptor } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  await app.listen(3000);
}
bootstrap();
