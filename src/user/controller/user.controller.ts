import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from '../user.service';
import { User } from '../entity/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/hello')
  get(): string {
    return this.userService.getHello();
  }

  @Get('/all')
  findAll(): Promise<User[]> {
    return this.userService.find();
  }

  @Post('/create')
  async create(@Body() user: CreateUserDto): Promise<User> {
    return await this.userService.create(user);
  }
}
