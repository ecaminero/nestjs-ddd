import * as mongoose from 'mongoose';
import { MONGO_DB_SERVER } from './../config';

export const databaseProviders = [{
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(MONGO_DB_SERVER, { useNewUrlParser: true }),
}];
