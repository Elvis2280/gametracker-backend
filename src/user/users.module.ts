import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './usercontroller';

@Module({
  exports: [UserService],
  controllers: [UserController],
})
export class UsersModule {}
