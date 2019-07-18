import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from '../user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../interface/user.entity';


@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  get(): string {
    return 'Hello World!';
  }

  @Get('/all')
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('/')
  async create(@Body() user: CreateUserDto): Promise<User> {
    return await this.userService.create(user);
  }
}
