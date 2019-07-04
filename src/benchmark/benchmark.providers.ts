import { Connection } from 'mongoose';
import { CatSchema } from './schemas/benchmark.schema';

export const catsProviders = [
  {
    provide: 'BENCHMARK_MODEL',
    useFactory: (connection: Connection) => connection.model('Cat', CatSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
