import { IsNotEmpty, IsString} from 'class-validator';

export class Shopping {
  @IsNotEmpty()
  // tslint:disable-next-line: variable-name
  _id?: string;

  @IsString()
  @IsNotEmpty()
  productName: string;

  @IsString()
  @IsNotEmpty()
  price: string;

  @IsString()
  @IsNotEmpty()
  productAdjective: string;

  @IsString()
  @IsNotEmpty()
  productMaterial: string;

  @IsString()
  @IsNotEmpty()
  product: string;

  @IsString()
  @IsNotEmpty()
  department: string;

  @IsString()
  user?: string;
}
