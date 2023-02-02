import { Injectable } from '@nestjs/common';
import { Transaction, Prisma, PrismaClient } from '@prisma/client';
import { CrudInterface } from 'src/interface/crud.interface';
@Injectable()
export class TransactionCRUDService
  implements
    CrudInterface<
      Transaction,
      Prisma.TransactionUpdateInput,
      Prisma.TransactionWhereInput
    >
{
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
  async findOne(id: number): Promise<Transaction> {
    return this.prisma.transaction.findUnique({
      where: { id },
      include: { product: true },
    });
  }
  async findAll(): Promise<Transaction[]> {
    return this.prisma.transaction.findMany();
  }
  async findMany(params?: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TransactionWhereUniqueInput;
    where?: Prisma.TransactionWhereInput;
    include?: Prisma.TransactionInclude;
    orderBy?: Prisma.TransactionOrderByWithRelationInput;
  }): Promise<Transaction[]> {
    return this.prisma.transaction.findMany(params);
  }
  async create(data: Prisma.TransactionCreateManyInput): Promise<Transaction> {
    return this.prisma.transaction.create({ data });
  }
  async update(params: {
    where: Prisma.TransactionWhereUniqueInput;
    data: Prisma.TransactionUpdateInput;
  }): Promise<Transaction> {
    {
      const { data, where } = params;
      return this.prisma.transaction.update({
        data,
        where,
      });
    }
  }
  async delete(id: number): Promise<Transaction> {
    return this.prisma.transaction.delete({ where: { id } });
  }
}
