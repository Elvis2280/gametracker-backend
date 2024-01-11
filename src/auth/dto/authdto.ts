import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  MaxLength,
  MinLength,
  IsString,
} from 'class-validator';

export class LoginAuthDto {
  @ApiProperty({
    description: 'The email of the user',
    example: 'example@test.com',
    maxLength: 50,
  })
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(50)
  email: string;
  @ApiProperty({
    description: 'The password of the user',
    example: 'password123',
    maxLength: 20,
    minLength: 8,
  })
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(20)
  @IsString()
  password: string;
}
