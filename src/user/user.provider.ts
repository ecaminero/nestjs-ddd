import { Connection } from 'mongoose';
import { UserEntity } from './entities/user.entity';

export const userProviders = [{
  provide: 'USER_MODEL',
  useFactory: (connection: Connection) => {
    return connection.model('User', UserEntity);
  },
  inject: ['DATABASE_CONNECTION'],
}];
