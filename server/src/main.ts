import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

async function bootstrap() {
  const server = express()
  const app = await NestFactory.create(AppModule,new ExpressAdapter(server));
  app.enableCors({
    origin: 'http://localhost:8080', // Cambia esto por tu URL de origen permitida
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();
