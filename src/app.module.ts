import { Module } from '@nestjs/common';
import { GameController } from './game/controllers/gamecontroller';
import { AppService } from './app.service';
import { UserController } from './user/usercontroller';
import { GameService } from './game/game.service';
import { UserService } from './user/user.service';
import { PrismaService } from './prisma.service';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [],
  controllers: [GameController, UserController, AuthController],
  providers: [
    PrismaService,
    JwtService,
    AppService,
    GameService,
    UserService,
    AuthService,
  ],
})
export class AppModule {}
