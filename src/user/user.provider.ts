import { User } from './repository/user.repository';
import { USER_MODEL_PROVIDER } from '../constants';

export const userProviders = [{
  provide: USER_MODEL_PROVIDER,
  useValue: User,
}];
