import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from '../user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entity/user.entity';

@Controller()
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
