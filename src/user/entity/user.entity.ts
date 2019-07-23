import { IsNotEmpty, IsNumber, IsString} from 'class-validator';
import { Shopping } from './shopping.entity';
import { Address } from './address.entity';
import { Finance } from './finance.entity';
import { Type } from 'class-transformer';

export class User {
  @IsNotEmpty()
  // tslint:disable-next-line: variable-name
  _id: string;

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

  @Type(() => Finance)
  finance: Finance;

  @Type(() => Address)
  address: Address;

  @Type(() => Shopping)
  shopping: Shopping[];
}
