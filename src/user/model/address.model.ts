import * as uuid from 'uuid/v4';
import { Column, Model, Table, DataType, BeforeCreate } from 'sequelize-typescript';
import { ForeignKey } from 'sequelize-typescript';
import { UserModel } from './user.model';

@Table
export class AdressModel extends Model<AdressModel> {

  @Column({type: DataType.UUID, primaryKey: true})
  // tslint:disable-next-line: variable-name
  _id: string;

  @Column
  zipCode: string;

  @Column
  city: string;

  @Column
  streetAddress: string;

  @Column
  country: string;

  @ForeignKey(() => UserModel)
  @Column({type: DataType.UUIDV4})
  userId: string;

  @BeforeCreate
  static makeUpperCase(instance: AdressModel) {
    instance._id = uuid();
  }
}
