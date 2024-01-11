import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  MinLength,
  MaxLength,
  IsString,
  IsNotEmpty,
} from 'class-validator';

export class GetUserDto {
  @ApiProperty({
    description: 'The email of the user',
    example: 'example@test.com',
    maxLength: 50,
  })
  @IsEmail()
  @MaxLength(50)
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'The password of the user',
    minLength: 8,
    maxLength: 20,
    example: 'password123',
  })
  @MinLength(8)
  @MaxLength(20)
  @IsString()
  password: string;
}

export class CreateUserDto extends GetUserDto {
  @ApiProperty({
    description: 'The name of the user',
    minLength: 3,
    maxLength: 50,
    example: 'John Doe',
  })
  @MinLength(3)
  @MaxLength(50)
  @IsString()
  name: string;
}
