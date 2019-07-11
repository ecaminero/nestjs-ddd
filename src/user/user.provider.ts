import { Connection } from 'mongoose';
import { UserEntity } from './entities/user.entity';
import { USER_MODEL_PROVIDER, DB_PROVIDER } from '../constants';

export const userProviders = [{
  provide: USER_MODEL_PROVIDER,
  useFactory: (connection: Connection) => {
    return connection.model('User', UserEntity);
  },
  inject: [DB_PROVIDER],
}];
