import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { TransactionCRUDService } from './transactioncrud.service';
import { ProductModule } from 'src/product/product.module';
@Module({
  imports: [ProductModule],
  controllers: [TransactionController],
  providers: [TransactionService, TransactionCRUDService],
})
export class TransactionModule {}
