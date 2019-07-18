import { UserEntity } from './model/user.model';
import { USER_MODEL_PROVIDER } from '../constants';

export const userProviders = [{
  provide: USER_MODEL_PROVIDER,
  useValue: UserEntity,
}];
