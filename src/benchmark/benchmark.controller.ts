import { Controller, Get } from '@nestjs/common';
import { BenchmarkService } from './benchmark.service';

@Controller()
export class BenchmarkController {
  constructor(private readonly bmService: BenchmarkService) {}

  @Get()
  getHello(): string {
    return this.bmService.getHello();
  }

}
