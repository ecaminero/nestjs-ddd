import { IsNotEmpty, IsNumber} from 'class-validator';

export class Finance {

  @IsNumber()
  @IsNotEmpty()
  account: number;
  accountName: string;
}
