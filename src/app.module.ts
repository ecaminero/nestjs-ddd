import { Module , NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UserController } from './app/controller/user.controller';
import { UserService } from './domain/service/user.service';
import { DatabaseModule } from './infrastructure/database/database.module';
import { modelProviders } from './infrastructure/model/model.provider';
import { UserRepository } from './infrastructure/repository/user.repository';
import { LoggerMiddleware } from './app/middlewere/logger.middleware';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [
    UserService,
    UserRepository,
    ...modelProviders,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply( LoggerMiddleware)
      .forRoutes(UserController);
  }
}
