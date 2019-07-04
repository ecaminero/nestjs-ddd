import { Injectable } from '@nestjs/common';

@Injectable()
export class BenchmarkService {
  getHello(): string {
    return 'Hello World!';
  }
}
