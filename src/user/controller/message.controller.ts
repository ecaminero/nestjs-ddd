import { Controller } from '@nestjs/common';
import { UserService } from '../user.service';

@Controller()
export class MessageController {
  constructor(private readonly userService: UserService) {}

  get(): string {
    return 'hello';
   }
}
