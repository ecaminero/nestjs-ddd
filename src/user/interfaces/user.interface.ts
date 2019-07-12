
export interface User {
  readonly name: string;
  readonly lastname: string;
  readonly age: number;
  readonly picture: string;
  readonly company: string;
  readonly email: string;
  readonly phone: string;
  readonly balance: string;
  readonly jobTitle: string;
  readonly avatar: string;
  readonly ipv6: string;
  readonly id: string;
  readonly finance: {
    readonly account: string;
    readonly accountName: string;
  };
  readonly address: {
    readonly zipCode: string;
    readonly city: string;
    readonly streetAddress: string;
    readonly country: string;
  };
  readonly shopping: [{
    readonly productName: string;
    readonly price: string;
    readonly productAdjective: string;
    readonly productMaterial: string;
    readonly product: string;
    readonly department: string;
  }];
}
