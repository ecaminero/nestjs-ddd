import { IsNotEmpty, IsString, IsNumber} from 'class-validator';
import { Shopping } from '../entity/shopping.entity';
import { Adress } from '../entity/adress.entity';
import { Finance } from '../entity/finance.entity';
import { User } from '../entity/user.entity';
import { Type } from 'class-transformer';

export class CreateUserDto extends User {

  @Type(() => Finance)
  readonly finance: Finance;

  @Type(() => Adress)
  address: Adress;

  @Type(() => Shopping)
  shopping: [Shopping];
}
