import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { isArray } from 'lodash';
import { Shopping } from '../entity/shopping.entity';
import { SHOPPING_MODEL_PROVIDER } from '../../constants';

// Se inyecta el repo en el servicio
@Injectable()
export class ShoppingRepository {
  constructor(@Inject(SHOPPING_MODEL_PROVIDER) readonly model: Model<Shopping>) {}

  async create(data: Shopping | Shopping[]): Promise<any[]> {
    data = isArray(data) ? data : [data];
    const shopping = await data.map(async obj => {
      const shop = new this.model(obj);
      return await shop.save();
    });

    return await Promise.all(shopping);
  }

  async find(): Promise<Shopping[]> {
    return await this.model.find().exec();
  }
}
