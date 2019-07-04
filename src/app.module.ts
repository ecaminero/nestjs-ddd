import { Module } from '@nestjs/common';
import { BenchmarkModule } from './benchmark/benchmark.module';

@Module({
  imports: [
    BenchmarkModule,
  ],
})
export class AppModule {}
