import { Injectable, Inject } from '@nestjs/common';
import * as sequelize from 'sequelize';
import { Model } from 'mongoose';
import { User } from '../entity/user.entity';
import { AddressRepository } from './address.repository';
import { ShoppingRepository } from './shopping.repository';
import { USER_MODEL_PROVIDER } from '../../constants';

// Se inyecta el repo en el servicio
@Injectable()
export class UserRepository {
  constructor(
    @Inject(USER_MODEL_PROVIDER) readonly model: Model<User>,
    private readonly addressRepository: AddressRepository,
    private readonly shoppingRepository: ShoppingRepository) {}

  async create(data: User): Promise<User> {
    const user = new this.model(data);
    user.save();

    if (data.address) {
      const address = await this.addressRepository.create(data.address);
      user.setAddress(address);
    }
    if (data.shopping) {
      const shopping = await this.shoppingRepository.create(data.shopping);
      user.setShoppings(shopping);
    }
    return data;
  }

  async find(): Promise<User[]> {
    const allUser = this.model.findAll({
      include: [
        { model: this.shoppingRepository.model },
        { model: this.addressRepository.model },
      ],
    });
    return await allUser;
  }
}
