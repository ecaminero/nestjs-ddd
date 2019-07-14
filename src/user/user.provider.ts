import { UserEntity } from './entity/user.entity';
import { USER_MODEL_PROVIDER } from '../constants';

export const userProviders = [{
  provide: USER_MODEL_PROVIDER,
  useValue: UserEntity,
}];
