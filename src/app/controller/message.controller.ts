import { Controller } from '@nestjs/common';

@Controller()
export class MessageController {
  constructor() {}

  get(): string {
    return 'hello';
   }
}
