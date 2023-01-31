import { Injectable } from '@nestjs/common';
import { StockHistory } from '@prisma/client';
import { StockCRUDService } from './stockcrud.service';
import { CreateStockHistoryDto } from './dto/stock.dto';
@Injectable()
export class StockService {
  constructor(private stockCrudService: StockCRUDService) {}
  async create(data: CreateStockHistoryDto): Promise<StockHistory> {
    return this.stockCrudService.create(data);
  }
  async getStockHistory(): Promise<StockHistory[]> {
    return this.stockCrudService.findMany({
      include: { product: true },
    });
  }
}
