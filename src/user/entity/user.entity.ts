import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table
export class UserEntity extends Model<UserEntity> {

  @Column({type: DataType.UUID, primaryKey: true})
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

  @Column
  id: string;

  @Column(DataType.JSON)
  finance: {
    account: string;
    accountName: string;
  };

  @Column(DataType.JSON)
  address: {
    zipCode: string;
    city: string;
    streetAddress: string;
    country: string;
  };

  @Column(DataType.JSON)
  shopping: [{
      productName: string,
      price: string,
      productAdjective: string,
      productMaterial: string,
      product: string,
      department: string,
  }];
}
