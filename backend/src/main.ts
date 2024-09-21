import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const projectRoot = path.resolve(__dirname, '.'); 
  const absoluteUploadsDir = path.join(projectRoot, 'uploads');

  if (!fs.existsSync(absoluteUploadsDir)) {
    fs.mkdirSync(absoluteUploadsDir, { recursive: true });
  }

  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ limit: '50mb', extended: true }));

  await app.listen(5000);
}
bootstrap();
