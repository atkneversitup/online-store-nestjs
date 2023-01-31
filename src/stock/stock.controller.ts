import { Controller, Get } from '@nestjs/common';
import { StockService } from './stock.service';
import { StockHistory } from '@prisma/client';
@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}
  @Get()
  async getStock(): Promise<StockHistory[]> {
    return this.stockService.getStockHistory();
  }
}
