import { IsNotEmpty, IsNumber, IsString} from 'class-validator';
import * as faker from 'faker';

// tslint:disable-next-line: max-classes-per-file
export class User {
  constructor(user: User | any) {
    this._id = faker.random.uuid();
    this.name = user.name;
    this.lastname = user.lastname;
    this.age = user.age;
  }
  // tslint:disable-next-line: variable-name
  readonly _id?: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  lastname: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;

  save(): User {
    return this;
  }
}
