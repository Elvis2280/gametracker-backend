import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, GetUserDto } from './dto/userdto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('create')
  async createUser(@Body() body: CreateUserDto) {
    const { email, password, name } = body;
    return this.userService.createUserAccount(email, password, name);
  }

  @Get('/')
  async getUser(@Query() query: GetUserDto) {
    const { email, password } = query;
    return this.userService.getUserByPassword(email, password);
  }
}
