import { Controller, Get, Post, Body, UseInterceptors } from '@nestjs/common';
import { UserService } from '../../domain/service/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../../domain/entities/user.entity';
import { LoggingInterceptor } from '../interceptors/logging.interceptor';

@Controller()
@UseInterceptors(LoggingInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/hello')
  get(): string {
    return 'Hello World!';
  }

  @Get('/all')
  findAll(): Promise<User[]> {
    return this.userService.find();
  }

  @Post('/')
  async create(@Body() user: CreateUserDto): Promise<User> {
    return await this.userService.create(user);
  }
}
