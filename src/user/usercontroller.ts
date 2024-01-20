import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, GetUserById } from 'src/utils/dto/userdto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/decorators/publicRoute/publicRoute';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('create')
  @Public()
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
