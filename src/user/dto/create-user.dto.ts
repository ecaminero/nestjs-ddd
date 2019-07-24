import { IsNotEmpty, IsString, IsNumber} from 'class-validator';
import { Shopping } from '../entity/shopping.entity';
import { Address } from '../entity/address.entity';
import { Finance } from '../entity/finance.entity';
import { User } from '../entity/user.entity';
import { Type } from 'class-transformer';

export class CreateUserDto extends User {
  @Type(() => Finance)
  finance: Finance;

  @Type(() => Address)
  address: Address;

  @Type(() => Object)
  shopping: [Shopping];
}
