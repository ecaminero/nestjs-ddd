import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_DB_SERVER } from './config';

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_DB_SERVER, {useNewUrlParser: true}),
    UserModule,
  ],
})
export class AppModule {}
