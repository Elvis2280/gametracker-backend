import { Module } from '@nestjs/common';
import { GameController } from './game/controllers/gamecontroller';
import { AppService } from './app.service';
import { UserController } from './user/controllers/usercontroller';
import { GameService } from './game/game.service';
import { UserService } from './user/user.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [GameController, UserController],
  providers: [PrismaService, AppService, GameService, UserService],
})
export class AppModule {}
