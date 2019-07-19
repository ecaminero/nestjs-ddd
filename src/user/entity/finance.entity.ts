import { IsNotEmpty, IsNumber} from 'class-validator';

export class Finance {

  @IsNotEmpty()
  account: string;
  accountName: string;
}
