import { Product, StockHistory } from '@prisma/client';
export interface ManageProductQuantityDto {
  type: 'increase' | 'decrease';
  quantity: number;
}
export interface ManageProductQuantityResult {
  product: Product;
  stockHistory: StockHistory;
}
