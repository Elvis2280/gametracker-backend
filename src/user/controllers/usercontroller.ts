import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../user.service';
import { UserData } from '../type';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getHello(): string {
    return 'Hello User!';
  }

  @Post('create')
  async createUser(@Body() body: UserData) {
    const { email, password, name } = body;
    if (!email || !password || !name) throw new Error('Missing parameters');
    return this.userService.createUser(email, password, name);
  }
}
