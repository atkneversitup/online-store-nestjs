/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Product, Prisma,PrismaClient } from '@prisma/client';
import { CrudInterface } from 'src/interface/crud.interface';
@Injectable()
export class ProductCRUDService
  implements
  CrudInterface<Product, Prisma.ProductUpdateInput, Prisma.ProductWhereInput> {
  private prisma: PrismaClient;
  constructor() { 
    this.prisma = new PrismaClient();
  }
  async findAll(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }
  async findMany(params?: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ProductWhereUniqueInput;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput;
  }): Promise<Product[]> {
    return this.prisma.product.findMany(params);
  }
  async findOne(id: number): Promise<Product | null> {
    return this.prisma.product.findUnique({ where: { id } });
  }
  async create(data: Prisma.ProductCreateInput): Promise<Product> {
    return this.prisma.product.create({ data });
  }
  async update(params: {
    where: Prisma.ProductWhereUniqueInput;
    data: Prisma.ProductUpdateInput;
  }): Promise<Product> {
    {
      const { data, where } = params;
      return this.prisma.product.update({
        data,
        where,
      });
    }
  }
  async delete(id: number): Promise<Product> {
    return this.prisma.product.delete({ where: { id } });
  }
}
