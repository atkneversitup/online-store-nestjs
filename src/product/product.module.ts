import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductCRUDService } from './productcrud.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { StockModule } from 'src/stock/stock.module';
// import { StockService } from 'src/stock/stock.service';
// import { StockCRUDService } from 'src/stock/stockcrud.service';
@Module({
  imports: [StockModule, PrismaModule],
  providers: [ProductService, ProductCRUDService],
  controllers: [ProductController],
  exports: [ProductService],
})
export class ProductModule {}
