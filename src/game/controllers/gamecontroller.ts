import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
@Controller('game')
@ApiTags('game')
export class GameController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
