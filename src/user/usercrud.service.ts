/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';
import { CrudInterface } from '../interface/crud.interface';

@Injectable()
export class UserCRUDService
  implements
  CrudInterface<User, Prisma.UserUpdateInput, Prisma.UserWhereUniqueInput>
{
  constructor(private prisma: PrismaService) { }
  async findAll(): Promise<User[]> {
    return this.prisma.getInstance().user.findMany();
  }
  async findOne(id: number): Promise<User> {
    return this.prisma.getInstance().user.findUnique({ where: { id } });
  }
  async findMany(params?: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.getInstance().user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
  async create(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.getInstance().user.create({
      data,
    });
  }
  async update(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.getInstance().user.update({
      data,
      where,
    });
  }
  async delete(id: number): Promise<User> {
    return this.prisma.getInstance().user.delete({
      where: { id },
    });
  }
}

// async user(
//   userWhereUniqueInput: Prisma.UserWhereUniqueInput,
// ): Promise<User | null> {
//   return this.prisma.user.findUnique({
//     where: userWhereUniqueInput,
//   });
// }

// async users(params: {
//   skip?: number;
//   take?: number;
//   cursor?: Prisma.UserWhereUniqueInput;
//   where?: Prisma.UserWhereInput;
//   orderBy?: Prisma.UserOrderByWithRelationInput;
// }): Promise<User[]> {
//   const { skip, take, cursor, where, orderBy } = params;
//   return this.prisma.getInstance().user.findMany({
//     skip,
//     take,
//     cursor,
//     where,
//     orderBy,
//   });
// }

// async createUser(data: Prisma.UserCreateInput): Promise<User> {
//   return this.prisma.getInstance().user.create({
//     data,
//   });
// }

// async updateUser(params: {
//   where: Prisma.UserWhereUniqueInput;
//   data: Prisma.UserUpdateInput;
// }): Promise<User> {
//   const { where, data } = params;
//   return this.prisma.getInstance().user.update({
//     data,
//     where,
//   });
// }

// async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
//   return this.prisma.getInstance().user.delete({
//     where,
//   });
// }
