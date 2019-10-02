import { LoggerService, Context } from '@domain/services/logger.service';
import { Controller, Get, Post, Body, UseInterceptors } from '@nestjs/common';
import { UserService } from '@domain/services/user.service';
import { CreateUserDto } from '@application/dto/create-user.dto';
import { User } from '@domain/entities/User';
import { LoggingInterceptor } from '@application/interceptors/logging.interceptor';

// UserController
@Controller()
@UseInterceptors(LoggingInterceptor)
export class HelloController {
  private Log: LoggerService = new LoggerService('createOperation');
  constructor(private readonly userService: UserService) {}

  @Get('/hello')
  get(): string {
    const context: Context = { module: 'HelloController', method: 'get' };
    this.Log.logger('Hello World!', context);
    return 'Hello World!';
  }

  @Get('/all')
  async getAll(): Promise<User[]> {
    const context: Context = { module: 'HelloController', method: 'getAll' };
    this.Log.logger('Hello World!', context);
    return await this.userService.find();
  }

  @Post('/')
  async create(@Body() user: CreateUserDto): Promise<User> {
    const context: Context = { module: 'HelloController', method: 'create' };
    this.Log.logger(user, context);
    return await this.userService.create(user);
  }
}
