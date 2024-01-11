import { Injectable } from '@nestjs/common';
import { createGameDto } from 'src/game/dto/gamedto';

@Injectable()
export class GameService {
  create(game: createGameDto) {
    console.log(game);
    return 'This action adds a new game';
  }
}
