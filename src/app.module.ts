import { Module } from '@nestjs/common';
import { GameController } from './game/controllers/gamecontroller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './game/models/game.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [Game],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [GameController],
  providers: [AppService],
})
export class AppModule {}
