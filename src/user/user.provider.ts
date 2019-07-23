import { UserModel } from './model/user.model';
import { AdressModel } from './model/address.model';
import { ShoppingModel } from './model/shopping.model';

import { USER_MODEL_PROVIDER } from '../constants';
import { SHOPPING_MODEL_PROVIDER } from '../constants';
import { ADDRESS_MODEL_PROVIDER } from '../constants';

export const userProviders = [{
    provide: USER_MODEL_PROVIDER,
    useValue: UserModel,
  },
  {
    provide: SHOPPING_MODEL_PROVIDER,
    useValue: ShoppingModel,
  },
  {
    provide: ADDRESS_MODEL_PROVIDER,
    useValue: AdressModel,
  },
];
