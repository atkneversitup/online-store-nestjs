import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { TransactionCRUDService } from './transactioncrud.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ProductModule } from 'src/product/product.module';
@Module({
  imports: [PrismaModule, ProductModule],
  controllers: [TransactionController],
  providers: [TransactionService, TransactionCRUDService],
})
export class TransactionModule {}
