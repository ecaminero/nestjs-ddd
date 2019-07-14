import { Schema } from 'mongoose';

// export class UserRepository extends Schema {
//   constructor(model: User) {
//     super(model);
//   }
// }
export const UserRepository = new Schema({
  name: String,
  lastname: String,
  age: Number,
  picture: String,
  company: String,
  email: String,
  phone: String,
  balance: String,
  jobTitle: String,
  phoneNumber: String,
  avatar: String,
  ipv6: String,
  id: String,
  finance: {
    account: String,
    accountName: String,
  },
  address: {
    zipCode: String,
    city: String,
    streetAddress: String,
    country: String,
  },
  shopping: [{
      productName: String,
      price: String,
      productAdjective: String,
      productMaterial: String,
      product: String,
      department: String,
  }],
});
