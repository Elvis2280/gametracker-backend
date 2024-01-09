import { Controller, Get } from '@nestjs/common';
@Controller('game')
export class GameController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
