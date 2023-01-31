import { Injectable } from '@nestjs/common';
import { Transaction, Prisma } from '@prisma/client';
import { CrudInterface } from 'src/interface/crud.interface';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class TransactionCRUDService
  implements
    CrudInterface<
      Transaction,
      Prisma.TransactionUpdateInput,
      Prisma.TransactionWhereInput
    >
{
  constructor(private prisma: PrismaService) {
    console.log('TransactionCRUDService constructor');
  }
  async findOne(id: number): Promise<Transaction> {
    return this.prisma.getInstance().transaction.findUnique({ where: { id } });
  }
  async findAll(): Promise<Transaction[]> {
    return this.prisma.getInstance().transaction.findMany();
  }
  async findMany(params?: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TransactionWhereUniqueInput;
    where?: Prisma.TransactionWhereInput;
    include?: Prisma.TransactionInclude;
    orderBy?: Prisma.TransactionOrderByWithRelationInput;
  }): Promise<Transaction[]> {
    return this.prisma.getInstance().transaction.findMany(params);
  }
  async create(data: Prisma.TransactionCreateManyInput): Promise<Transaction> {
    return this.prisma.getInstance().transaction.create({ data });
  }
  async update(params: {
    where: Prisma.TransactionWhereUniqueInput;
    data: Prisma.TransactionUpdateInput;
  }): Promise<Transaction> {
    {
      const { data, where } = params;
      return this.prisma.getInstance().transaction.update({
        data,
        where,
      });
    }
  }
  async delete(id: number): Promise<Transaction> {
    return this.prisma.getInstance().transaction.delete({ where: { id } });
  }
}
