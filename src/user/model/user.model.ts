import * as uuid from 'uuid/v4';
import { Column, Model, Table, DataType } from 'sequelize-typescript';
import { ForeignKey, HasMany, BeforeCreate } from 'sequelize-typescript';
import { AdressModel } from './address.model';
import { ShoppingModel } from './shopping.model';

@Table
export class UserModel extends Model<UserModel> {

  @Column({type: DataType.UUIDV4, primaryKey: true})
  // tslint:disable-next-line: variable-name
  _id: string;

  @Column
  name: string;

  @Column
  lastname: string;

  @Column
  age: number;

  @Column
  picture: string;

  @Column
  company: string;

  @Column
  email: string;

  @Column
  phone: string;

  @Column
  balance: string;

  @Column
  jobTitle: string;

  @Column
  phoneNumber: string;

  @Column
  avatar: string;

  @Column
  ipv6: string;

  @Column(DataType.JSON)
  finance: {
    account: string;
    accountName: string;
  };

  @ForeignKey(() => AdressModel)
  @Column({type: DataType.UUIDV4})
  address: string;

  @HasMany(() => ShoppingModel)
  shoppings: ShoppingModel[];

  @BeforeCreate
  static makeUpperCase(instance: UserModel) {
    instance._id = uuid();
  }
}
