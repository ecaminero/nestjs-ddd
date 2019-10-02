import { IsNotEmpty, IsString, IsNumber} from 'class-validator';
import { Shopping } from '@domain/entities/shopping.entity';
import { Address } from '@domain/entities/address.entity';
import { Finance } from '@domain/entities/finance.entity';
import { Type } from 'class-transformer';

/* istanbul ignore if  */
export class CreateUserDto  {
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
