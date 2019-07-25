import { IsNotEmpty, IsString, IsNumber} from 'class-validator';
import { Shopping } from '../../domain/entities/shopping.entity';
import { Address } from '../../domain/entities/address.entity';
import { Finance } from '../../domain/entities/finance.entity';
import { Type } from 'class-transformer';

export class CreateUserDto  {
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

  @Type(() => Object)
  shopping: [Shopping];
}
