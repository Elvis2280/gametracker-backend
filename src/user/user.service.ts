import { Injectable } from '@nestjs/common';
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

    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  }

  async createUser(email: string, password: string, name: string) {
    const user = await this.prisma.user.create({
      data: {
        email,
        password,
        name,
      },
    });

    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  }
}
