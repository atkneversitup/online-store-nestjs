import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction';
import { Transaction } from '@prisma/client';
@Controller('transaction')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}
  @Post()
  async createTransaction(
    @Body() body: CreateTransactionDto,
  ): Promise<Transaction> {
    return this.transactionService.createTransaction(body);
  }
  @Get()
  async getAllTransactions(): Promise<Transaction[]> {
    return this.transactionService.getAllTransactions();
  }
  @Get(':id')
  async getTransaction(@Param('id') id: string): Promise<Transaction> {
    return this.transactionService.getTransaction(parseInt(id));
  }
}
