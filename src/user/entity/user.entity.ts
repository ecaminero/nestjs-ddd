
export interface User {
  name: string;
  lastname: string;
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
  finance: {
    account: string;
    accountName: string;
  };
  address: {
    zipCode: string;
    city: string;
    streetAddress: string;
    country: string;
  };
  shopping: [{
    productName: string;
    price: string;
    productAdjective: string;
    productMaterial: string;
    product: string;
    department: string;
  }];
  validate_age: () => {};
}
