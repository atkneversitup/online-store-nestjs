import { Controller } from '@nestjs/common';
import { ProductService } from './product.service';
import { Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import {
  ManageProductQuantityDto,
  ManageProductQuantityResult,
} from './product.interface';
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {
    console.log('ProductController.constructor()');
  }
  @Get()
  async findAll() {
    return this.productService.findAll();
  }
  @Get('/search/:name')
  async seachByName(@Param('name') name: string) {
    return this.productService.seachByName(name);
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const pasredId = Number(id);
    return this.productService.findOne(pasredId);
  }
  @Post()
  async create(@Body() data: Prisma.ProductCreateInput) {
    return this.productService.create(data);
  }
  @Post('manage-stock/:id')
  async manageStock(
    @Param('id') id: string,
    @Body() data: ManageProductQuantityDto,
  ): Promise<ManageProductQuantityResult> {
    const parsedId = Number(id);
    return this.productService.manageStock(parsedId, data);
  }
  @Put(':id')
  async update(
    @Param('id') inputId: string,
    @Body() data: Prisma.ProductUpdateInput,
  ) {
    const id = Number(inputId);
    return this.productService.update({ where: { id }, data });
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    const parsedId = Number(id);
    return this.productService.delete(parsedId);
  }
}
