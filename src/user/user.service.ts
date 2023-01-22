import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'
import { CreateUserDto } from './dto/create-user.dto'
@Injectable()
export class UserService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient()
  }

  async create(createUserDto: CreateUserDto) {
    const user = await this.prisma.user.create({
      data: {
        name: createUserDto.name,
        username: createUserDto.username,
        password: createUserDto.password,
      },
    });
    return user;
  }
}