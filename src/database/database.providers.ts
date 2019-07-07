import * as mongoose from 'mongoose';
import { DB_SERVER } from './../config';

export const databaseProviders = [{
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(DB_SERVER, { useNewUrlParser: true }),
}];
