import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from '../user.service';
import { User } from '../entity/user.entity';

@Controller()
export class MessageController {
  constructor(private readonly userService: UserService) {}

  get(): string {
    return this.userService.getHello();
  }

  @Get('/all')
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
