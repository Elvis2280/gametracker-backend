import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './controllers/usercontroller';

@Module({
  exports: [UserService],
  controllers: [UserController],
})
export class UsersModule {}
