
import { IsNotEmpty } from 'class-validator';

export class Finance {
  @IsNotEmpty()
  // tslint:disable-next-line: variable-name
  readonly _id?: string;

  @IsNotEmpty()
  account: string;
  accountName: string;
}
