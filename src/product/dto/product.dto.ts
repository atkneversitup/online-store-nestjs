import { Product, StockHistory } from '@prisma/client';

export interface ManageProductQuantityResult {
  product: Product;
  stockHistory: StockHistory;
}
