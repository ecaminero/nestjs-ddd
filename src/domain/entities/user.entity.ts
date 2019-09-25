import { IsNotEmpty, IsNumber, IsString} from 'class-validator';
import { Shopping } from './shopping.entity';
import { Address } from './address.entity';
import { Finance } from './finance.entity';
import { Type } from 'class-transformer';

// tslint:disable-next-line: max-classes-per-file
class Hal {
  @Type(() => Object)
  _link: {

  };
  
  @Type(() => Object)
  _embedded: {

  };
}

// tslint:disable-next-line: max-classes-per-file
export class User {
  // tslint:disable-next-line: variable-name
  readonly _id?: string;

  @IsString()
  @IsNotEmpty()
  name: string;
  lastname: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;

  @IsString()
  picture: string;

  @IsString()
  company: string;

  @IsString()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  balance: string;

  @IsString()
  jobTitle: string;

  @IsString()
  avatar: string;

  @IsString()
  ipv6: string;
  // tslint:disable-next-line: variable-name
  @Type(() => Finance)
  finance: Finance;

  @Type(() => Address)
  address: Address;

  @Type(() => Shopping)
  shopping: Shopping[];
}
