import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { TypeormStore } from 'connect-typeorm';
import { EntityManager } from 'typeorm';
import { Session } from './typeorm/entities/Session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const sessionRepository = app.get(EntityManager).getRepository(Session);
  app.use(
    session({
      secret: process.env.COOKIE_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 60000 * 60 * 24,
      },
      store: new TypeormStore().connect(sessionRepository),
    }),
  );

  try {
    await app.listen(process.env.PORT);
    console.log(`Running on PORT ${process.env.PORT}`);
  } catch (e) {
    console.log(e);
  }
}

bootstrap();
