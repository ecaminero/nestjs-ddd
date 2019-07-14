import { Sequelize } from 'sequelize-typescript';
import { User } from '../user/repository/user.repository';
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
    sequelize.addModels([User]);
    await sequelize.sync();
    return sequelize;
  },
}];
