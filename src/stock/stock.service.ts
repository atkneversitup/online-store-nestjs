import { Injectable } from '@nestjs/common';
import { StockHistory } from '@prisma/client';
import { StockCRUDService } from './stockcrud.service';
@Injectable()
export class StockService {
  constructor(private stockCrudService: StockCRUDService) {}
  async create(data): Promise<StockHistory> {
    return this.stockCrudService.create(data);
  }
  async getStockHistory(): Promise<StockHistory[]> {
    // include: { product: true },
    return this.stockCrudService.findMany({
      include: { product: true },
    });
  }
}
