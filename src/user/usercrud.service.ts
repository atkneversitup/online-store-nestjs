/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User, Prisma ,PrismaClient } from '@prisma/client';
import { CrudInterface } from '../interface/crud.interface';

@Injectable()
export class UserCRUDService
  implements
  CrudInterface<User, Prisma.UserUpdateInput, Prisma.UserWhereUniqueInput>
{
  private prisma: PrismaClient
  constructor() { }
  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
  async findOne(id: number): Promise<User> {
    return this.prisma.user.findUnique({ where: { id } });
  }
  async findMany(params?: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
  async create(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }
  async update(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }
  async delete(id: number): Promise<User> {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}