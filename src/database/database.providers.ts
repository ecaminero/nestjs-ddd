import { Sequelize } from 'sequelize-typescript';
import { UserModel } from '../user/model/user.model';
import { AdressModel } from '../user/model/address.model';
import { ShoppingModel } from '../user/model/shopping.model';
import {
  DB_PROVIDER,
  DB_HOST,
  DB_NAME,
  DB_DIALECT,
  DB_USERNAME,
  DB_PASSWORD,
} from '../constants';

export const databaseProviders = [{
  provide: DB_PROVIDER,
  useFactory: async () => {
    const sequelize = new Sequelize({
      dialect: DB_DIALECT,
      host: DB_HOST,
      username: DB_USERNAME,
      password: DB_PASSWORD,
      database: DB_NAME,
      dialectOptions: {
        insecureAuth: true,
        supportBigNumbers: true,
      },
    });
    sequelize.addModels([AdressModel, ShoppingModel, UserModel]);
    await sequelize.sync({force: true});
    return sequelize;
  },
}];
