import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
const schemas = [
  { name: 'User', schema: UserSchema },
];

@Module({
  imports: [MongooseModule.forFeature(schemas)],
  controllers: [UserController],
  providers: [
    UserService,
  ],
})
export class UserModule {}
