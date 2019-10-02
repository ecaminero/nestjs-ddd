import * as faker from 'faker';

export class UserModel {
  constructor(user: UserModel | any) {
    this._id = faker.random.uuid();
    this.name = user.name;
    this.lastname = user.lastname;
    this.age = user.age;
  }

  _id?: string;
  name: string;
  lastname: string;
  age: number;

  save(): UserModel {
    return this;
  } 
}
