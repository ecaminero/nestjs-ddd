import * as mongoose from 'mongoose';
import { Mockgoose } from 'mockgoose-fix';

export const mockooseProviders = [{
  provide: 'MOCK_DATABASE_CONNECTION',
  useFactory: async () => {
    (mongoose as any).Promise = global.Promise;
    const mockgoose = new Mockgoose(mongoose);
    mockgoose.prepareStorage().then(async () => {
      await mongoose.connect('mongodb://example.com/TestingDB'); // you can add here anything !
    });
    return mongoose;
  },
}];
