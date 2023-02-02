import { Injectable } from '@nestjs/common';
import { ProductCRUDService } from './productcrud.service';
import { Prisma, Product } from '@prisma/client';
import { StockService } from 'src/stock/stock.service';
import { ManageProductQuantityDto } from './product.interface';
import { ManageProductQuantityResult } from './dto/product.dto';
@Injectable()
export class ProductService {
  constructor(
    private readonly stockService: StockService,
    private readonly productCRUDService: ProductCRUDService,
  ) {}
  async findAll(): Promise<Product[]> {
    return this.productCRUDService.findAll();
  }
  async seachByName(name: string): Promise<Product[]> {
    return this.productCRUDService.findMany({
      where: {
        name: {
          contains: name,
          mode: 'insensitive',
        },
      },
    });
  }
  async manageStock(
    id: number,
    manageProductQuantityDto: ManageProductQuantityDto,
  ): Promise<ManageProductQuantityResult> {
    // type : 'increase' | 'decrease'
    const { type, quantity } = manageProductQuantityDto;
    const product = await this.productCRUDService.findOne(id);
    if (product) {
      if (type === 'increase') {
        product.quantity += quantity;
      } else if (type === 'decrease') {
        product.quantity -= quantity;
      }
      await this.productCRUDService.update({
        where: { id },
        data: { quantity: product.quantity },
      });
      const stockHistory = await this.stockService.create({
        productId: id,
        quantity,
        type,
      });
      return {
        product: product,
        stockHistory: stockHistory,
      };
    }
  }
  async findOne(id: number): Promise<Product | null> {
    return this.productCRUDService.findOne(id);
  }
  async create(data: Prisma.ProductCreateInput): Promise<Product> {
    return this.productCRUDService.create(data);
  }
  async update(params: {
    where: Prisma.ProductWhereUniqueInput;
    data: Prisma.ProductUpdateInput;
  }): Promise<Product> {
    return this.productCRUDService.update(params);
  }
  async delete(id: number): Promise<Product> {
    return this.productCRUDService.delete(id);
  }
}
