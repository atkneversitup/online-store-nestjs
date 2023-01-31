import { Injectable } from '@nestjs/common';
import { StockHistory, Prisma } from '@prisma/client';
import { CrudInterface } from 'src/interface/crud.interface';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class StockCRUDService
  implements
    CrudInterface<
      StockHistory,
      Prisma.StockHistoryUpdateInput,
      Prisma.StockHistoryWhereInput
    >
{
  constructor(private prisma: PrismaService) {}

  async findOne(id: number): Promise<StockHistory> {
    return this.prisma.getInstance().stockHistory.findUnique({ where: { id } });
  }
  async findMany(params?: {
    skip?: number;
    take?: number;
    cursor?: Prisma.StockHistoryWhereUniqueInput;
    where?: Prisma.StockHistoryWhereInput;
    include?: Prisma.StockHistoryInclude;
    orderBy?: Prisma.StockHistoryOrderByWithRelationInput;
  }): Promise<StockHistory[]> {
    return this.prisma.getInstance().stockHistory.findMany(params);
  }
  async findAll(): Promise<StockHistory[]> {
    return this.prisma.getInstance().stockHistory.findMany();
  }
  async update(params: {
    where: Prisma.StockHistoryWhereUniqueInput;
    data: Prisma.StockHistoryUpdateInput;
  }): Promise<StockHistory> {
    {
      const { data, where } = params;
      return this.prisma.getInstance().stockHistory.update({
        data,
        where,
      });
    }
  }

  async create(data: Prisma.StockHistoryCreateInput): Promise<StockHistory> {
    return this.prisma.getInstance().stockHistory.create({ data });
  }
  async delete(id: number): Promise<StockHistory> {
    return this.prisma.getInstance().stockHistory.delete({ where: { id } });
  }
}
