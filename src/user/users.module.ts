import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './usercontroller';
import { PrismaService } from 'src/prisma.service';

@Module({
  exports: [UserService],
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class UsersModule {}
