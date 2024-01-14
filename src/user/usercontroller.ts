import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, GetUserById } from 'src/utils/dto/userdto';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('create')
  async createUser(@Body() body: CreateUserDto) {
    const { email, password, name } = body;
    return this.userService.createUserAccount(email, password, name);
  }
  @ApiBearerAuth()
  @Get('/')
  async getUser(@Query() query: GetUserById) {
    const { userId } = query;
    return this.userService.getUserById(userId);
  }
}
