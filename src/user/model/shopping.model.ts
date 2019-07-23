import * as uuid from 'uuid/v4';
import { Column, Model, Table, DataType } from 'sequelize-typescript';
import { ForeignKey, BeforeCreate } from 'sequelize-typescript';
import { UserModel } from './user.model';

@Table
export class ShoppingModel extends Model<ShoppingModel> {

  @Column({type: DataType.UUIDV4, primaryKey: true})
  // tslint:disable-next-line: variable-name
  _id: string;

  @Column
  productName: string;

  @Column
  price: string;

  @Column
  productAdjective: string;

  @Column
  productMaterial: string;

  @Column
  product: string;

  @Column
  department: string;

  @ForeignKey(() => UserModel)
  @Column({type: DataType.UUIDV4})
  userId: string;

  @BeforeCreate
  static makeUpperCase(instance: ShoppingModel) {
    instance._id = uuid();
  }
}
