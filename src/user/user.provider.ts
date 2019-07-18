import { Connection } from 'mongoose';
import { UserModel } from './model/user.model';
import { USER_MODEL_PROVIDER, DB_PROVIDER } from '../constants';

export const userProviders = [{
  provide: USER_MODEL_PROVIDER,
  useFactory: (connection: Connection) => {
    return connection.model('User', UserModel);
  },
  inject: [DB_PROVIDER],
}];
