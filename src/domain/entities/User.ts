import { IsNotEmpty, IsNumber, IsString} from 'class-validator';

// tslint:disable-next-line: max-classes-per-file
export class User {
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
}
