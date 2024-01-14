import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserToken } from './types';
import { ApiTags } from '@nestjs/swagger';
import { GetUserDto } from 'src/utils/dto/userdto';
import { Public } from 'src/decorators/publicRoute/publicRoute';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() body: GetUserDto): Promise<UserToken> {
    const { email, password } = body;
    return this.authService.signIn(email, password);
  }
}
