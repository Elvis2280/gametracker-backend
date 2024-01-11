import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserToken } from './types';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(
    @Body() body: { email: string; password: string },
  ): Promise<UserToken> {
    const { email, password } = body;
    return this.authService.signIn(email, password);
  }
}
