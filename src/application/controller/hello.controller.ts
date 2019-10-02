import { Controller, Get, Post, Body, UseInterceptors } from '@nestjs/common';
import { UserService } from '@domain/service/user.service';
import { CreateUserDto } from '@application/dto/create-user.dto';
import { User } from '@domain/entities/User';
import { LoggingInterceptor } from '@application/interceptors/logging.interceptor';

// UserController
@Controller()
@UseInterceptors(LoggingInterceptor)
export class HelloController {
  constructor(private readonly userService: UserService) {}

  @Get('/hello')
  get(): string {
    return 'Hello World!';
  }

  @Post('/')
  async create(@Body() user: CreateUserDto): Promise<User> {
    return await this.userService.create(user);
  }
}
