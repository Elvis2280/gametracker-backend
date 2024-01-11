import { Module } from '@nestjs/common';
import { GameController } from './game/controllers/gamecontroller';
import { AppService } from './app.service';
import { UserController } from './user/usercontroller';
import { GameService } from './game/game.service';
import { PrismaService } from './prisma.service';
import { AuthController } from './auth/auth.controller';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './user/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [GameController, UserController, AuthController],
  providers: [PrismaService, AppService, GameService],
})
export class AppModule {}
