import { Module } from '@nestjs/common';
import { BenchmarkController } from './benchmark.controller';
import { BenchmarkService } from './benchmark.service';

@Module({
  controllers: [BenchmarkController],
  providers: [
    BenchmarkService,
  ],
})
export class BenchmarkModule {}
