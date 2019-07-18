import { IsNotEmpty, IsNumber, IsString} from 'class-validator';

export class User {

  @IsString()
  @IsNotEmpty()
  name: string;
  lastname: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;
  picture: string;
  company: string;
  email: string;
  phone: string;
  balance: string;
  jobTitle: string;
  avatar: string;
  ipv6: string;
  id: string;
}
