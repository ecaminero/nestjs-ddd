import { Controller } from '@nestjs/common';

@Controller()
export class UserEventController {
  constructor() {}

  get(): string {
    return 'hello';
   }
}
