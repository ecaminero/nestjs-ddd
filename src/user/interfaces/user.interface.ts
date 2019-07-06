
import { Document } from 'mongoose';

export interface User extends Document {
  readonly name: string;
  readonly lastname: string;
  readonly age: number;
  readonly picture: string;
  readonly company: string;
  readonly email: string;
  readonly phone: string;
  readonly balance: string;
}