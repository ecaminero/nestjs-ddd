import { IsNotEmpty } from 'class-validator';

export class Address {
  @IsNotEmpty()
  // tslint:disable-next-line: variable-name
  readonly _id?: string;
  zipCode: string;
  city: string;
  streetAddress: string;
  country: string;
}
