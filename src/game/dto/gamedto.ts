import { GameStatus, Platform } from 'src/game/interfaces/game.interface';

export class createGameDto {
  game_title: string;
  game_description: string;
  game_picture: string;
  status: GameStatus;
  user_id: number;
  platforms: Platform[];
  genres: string[];
}
