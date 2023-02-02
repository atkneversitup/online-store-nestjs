import { Module } from '@nestjs/common';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';
import { StockCRUDService } from './stockcrud.service';
@Module({
  imports: [],
  providers: [StockService, StockCRUDService],
  controllers: [StockController],
  exports: [StockService],
})
export class StockModule {}
