import { Controller } from '@nestjs/common';
import { ProductService } from './product.service';
import { Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Prisma, Product } from '@prisma/client';
import {
  IManageProductQuantity,
  IManageProductQuantityResult,
} from './interface/manage-product-quantity.interface';
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }
  @Get('/search/:name')
  async seachByName(@Param('name') name: string): Promise<Product[]> {
    return this.productService.seachByName(name);
  }
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Product | null> {
    const pasredId = Number(id);
    return this.productService.findOne(pasredId);
  }
  @Post()
  async create(@Body() data: Prisma.ProductCreateInput): Promise<Product> {
    return this.productService.create(data);
  }
  @Post('manage-stock/:id')
  async manageStock(
    @Param('id') id: string,
    @Body() data: IManageProductQuantity,
  ): Promise<IManageProductQuantityResult> {
    const parsedId = Number(id);
    return this.productService.manageStock(parsedId, data);
  }
  @Put(':id')
  async update(
    @Param('id') inputId: string,
    @Body() data: Prisma.ProductUpdateInput,
  ): Promise<Product> {
    const id = Number(inputId);
    return this.productService.update({ where: { id }, data });
  }
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<string> {
    const parsedId = Number(id);
    return this.productService.delete(parsedId);
  }
}
