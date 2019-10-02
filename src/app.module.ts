import { Module , NestModule, MiddlewareConsumer } from '@nestjs/common';
import { HelloController } from './application/controller/hello.controller';
import { UserService } from './domain/service/user.service';
import { DatabaseModule } from './infrastructure/database/database.module';
import { modelProviders } from './infrastructure/models';
import { UserRepository } from './infrastructure/repository/user.repository';
import { LoggerMiddleware } from './application/middlewere/logger.middleware';
import { TerminusModule } from '@nestjs/terminus';
import { TerminusOptionsService } from './infrastructure/health/terminus-options.check';

const HealthModule = TerminusModule.forRootAsync({
  useClass: TerminusOptionsService,
});

@Module({
  imports: [DatabaseModule, HealthModule],
  controllers: [HelloController],
  providers: [
    UserService,
    UserRepository,
    ...modelProviders,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(HelloController);
  }
}
