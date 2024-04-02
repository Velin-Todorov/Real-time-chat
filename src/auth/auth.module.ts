import { Logger, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.entity';
import { UserService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  exports: [],
  controllers: [AuthController],
  providers: [UserService, Logger],
})
export class UserModule {}
