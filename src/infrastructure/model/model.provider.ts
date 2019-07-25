import { Connection } from 'mongoose';
import { UserModel } from './user.model';
import { USER_MODEL_PROVIDER, DB_PROVIDER } from '../../constants';

export const modelProviders = [{
  provide: USER_MODEL_PROVIDER,
  useFactory: (connection: Connection) => {
    return connection.model('User', UserModel);
  },
  inject: [DB_PROVIDER],
}];
