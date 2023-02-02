import { Product, StockHistory } from '@prisma/client';
export interface IManageProductQuantity {
  type: 'increase' | 'decrease';
  quantity: number;
}
export interface IManageProductQuantityResult {
  product: Product;
  stockHistory: StockHistory;
}
