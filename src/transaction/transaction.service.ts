import { Injectable } from '@nestjs/common';
import { TransactionCRUDService } from './transactioncrud.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { ProductService } from 'src/product/product.service';
import { Prisma } from '@prisma/client';
@Injectable()
export class TransactionService {
  constructor(
    private transactionCRUDService: TransactionCRUDService,
    private productService: ProductService,
  ) {}
  async getTransaction(id: number) {
    return this.transactionCRUDService.findOne(id);
  }
  async getAllTransactions() {
    return this.transactionCRUDService.findAll();
  }
  async createTransaction(data: CreateTransactionDto) {
    const { productId, quantity } = data;
    const product = await this.productService.findOne(productId);
    if (product) {
      const result = await this.productService.manageStock(productId, {
        type: 'decrease',
        quantity,
      });
      if (result) {
        const payloadCreateTransaction: Prisma.TransactionCreateManyInput = {
          productId: productId,
          quantity: quantity,
          total: product.price * quantity,
          date: new Date(),
        };
        return this.transactionCRUDService.create(payloadCreateTransaction);
      }
    }
  }
}
