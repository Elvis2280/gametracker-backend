import { Module } from '@nestjs/common';
import { GameController } from './controllers/gamecontroller';
import { GameService } from './game.service';
@Module({
  imports: [],
  controllers: [GameController],
  providers: [GameService],
})
export class GameModule {}
