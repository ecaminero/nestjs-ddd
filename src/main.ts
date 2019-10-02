// Only For module alias
import 'module-alias/register';
import * as path from 'path';
import * as moduleAlias from 'module-alias';
moduleAlias.addAliases({
  '@domain': path.resolve(__dirname, 'domain'),
  '@application': path.resolve(__dirname, 'application'),
  '@infrastructure': path.resolve(__dirname, 'infrastructure'),
  '@constants': path.format({dir: __dirname, name: 'constants'}),
});

// App modules
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { APP_PORT } from './constants';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(APP_PORT);

  console.log('Runing on port ==> ', APP_PORT);
}
bootstrap();
