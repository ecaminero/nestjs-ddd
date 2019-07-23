import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Address } from '../entity/address.entity';
import { ADDRESS_MODEL_PROVIDER } from '../../constants';

// Se inyecta el repo en el servicio
@Injectable()
export class AddressRepository {
  constructor(@Inject(ADDRESS_MODEL_PROVIDER) private readonly model: Model<Address>) {}

  async create(data: Address): Promise<Address> {
    const address = new this.model(data);
    return await address.save();
  }

  async find(): Promise<Address[]> {
    return await this.model.find();
  }
}
