import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @Column()
  game_title: string;
  @Column()
  game_description: string;
  @Column()
  game_picture: string;
  @Column()
  status: string;
  @Column()
  user_id: number;
  @Column({ type: 'text', array: true })
  platforms: string[];
  @Column({ type: 'text', array: true })
  genres: string[];
}
