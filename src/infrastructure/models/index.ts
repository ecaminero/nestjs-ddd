import { UserModel } from './User.model';
import { USER_MODEL_PROVIDER, DB_PROVIDER } from '@constants';

export const modelProviders = [{
  provide: USER_MODEL_PROVIDER,
  useValue: UserModel,
  inject: [DB_PROVIDER],
}];
