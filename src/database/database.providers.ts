import * as mongoose from 'mongoose';
import { Mockgoose } from 'mockgoose-fix';
import { DB_SERVER } from './../config';

export const databaseProviders = [{
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(DB_SERVER, { useNewUrlParser: true }),
}];
