import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  age: Number,
  picture: String,
  company: String,
  email: String,
  phone: String,
  balance: String,
});
