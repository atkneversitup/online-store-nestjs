import { Injectable } from '@nestjs/common';
import { StockHistory, Prisma, PrismaClient } from '@prisma/client';
import { CrudInterface } from 'src/interface/crud.interface';
@Injectable()
export class StockCRUDService
  implements
    CrudInterface<
      StockHistory,
      Prisma.StockHistoryUpdateInput,
      Prisma.StockHistoryWhereInput
    >
{
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
  async findOne(id: number): Promise<StockHistory> {
    return this.prisma.stockHistory.findUnique({ where: { id } });
  }
  async findMany(params?: {
    skip?: number;
    take?: number;
    cursor?: Prisma.StockHistoryWhereUniqueInput;
    where?: Prisma.StockHistoryWhereInput;
    include?: Prisma.StockHistoryInclude;
    orderBy?: Prisma.StockHistoryOrderByWithRelationInput;
  }): Promise<StockHistory[]> {
    return this.prisma.stockHistory.findMany(params);
  }
  async findAll(): Promise<StockHistory[]> {
    return this.prisma.stockHistory.findMany();
  }
  async update(params: {
    where: Prisma.StockHistoryWhereUniqueInput;
    data: Prisma.StockHistoryUpdateInput;
  }): Promise<StockHistory> {
    {
      const { data, where } = params;
      return this.prisma.stockHistory.update({
        data,
        where,
      });
    }
  }

  async create(data: Prisma.StockHistoryCreateInput): Promise<StockHistory> {
    return this.prisma.stockHistory.create({ data });
  }
  async delete(id: number): Promise<StockHistory> {
    return this.prisma.stockHistory.delete({ where: { id } });
  }
}
