/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Product, Prisma } from '@prisma/client';
import { CrudInterface } from 'src/interface/crud.interface';
@Injectable()
export class ProductCRUDService
  implements
  CrudInterface<Product, Prisma.ProductUpdateInput, Prisma.ProductWhereInput> {
  constructor(private prisma: PrismaService ) { }
  // findOne(id: number): Promise<T | null>;
  // findAll(): Promise<T[]>;
  // create(data: D): Promise<T>;
  // update(params: { where: W; data: D }): Promise<T>;
  // delete(id: number): Promise<T>;
  async findAll(): Promise<Product[]> {
    return this.prisma.getInstance().product.findMany();
  }
  async findMany(params?: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ProductWhereUniqueInput;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput;
  }): Promise<Product[]> {
    return this.prisma.getInstance().product.findMany(params);
  }
  async findOne(id: number): Promise<Product | null> {
    return this.prisma.getInstance().product.findUnique({ where: { id } });
  }
  async create(data: Prisma.ProductCreateInput): Promise<Product> {
    return this.prisma.getInstance().product.create({ data });
  }
  async update(params: {
    where: Prisma.ProductWhereUniqueInput;
    data: Prisma.ProductUpdateInput;
  }): Promise<Product> {
    {
      const { data, where } = params;
      return this.prisma.getInstance().product.update({
        data,
        where,
      });
    }
  }
  async delete(id: number): Promise<Product> {
    return this.prisma.getInstance().product.delete({ where: { id } });
  }
}
