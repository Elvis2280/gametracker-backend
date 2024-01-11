import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getUserByPassword(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
        password,
      },
    });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  }

  async createUserAccount(email: string, password: string, name: string) {
    const user = await this.prisma.user.create({
      data: {
        email,
        password,
        name,
      },
    });

    if (!user) {
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  }

  async getUserById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) return new HttpException('User not found', HttpStatus.NOT_FOUND);

    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  }
}
