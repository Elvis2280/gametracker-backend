export interface Game {
  id: number;
  game_title: string;
  game_description: string;
  game_picture: string;
  status: GameStatus;
  user_id: number;
  platforms: Platform[];
  genres: string[];
}

export type GameStatus = 'Not started' | 'In Progress' | 'Completed';

export type Platform = 'deck' | 'xbox';
