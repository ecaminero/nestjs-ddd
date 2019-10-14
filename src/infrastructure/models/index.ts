import { UserModel } from './user.model';
import { USER_MODEL_PROVIDER, DB_PROVIDER } from '@constants';

export const modelProviders = [{
  provide: USER_MODEL_PROVIDER,
  useValue: UserModel,
  inject: [DB_PROVIDER],
}];
