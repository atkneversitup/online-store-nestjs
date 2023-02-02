import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { ProductModule } from './product/product.module';
import { TransactionModule } from './transaction/transaction.module';
import { StockModule } from './stock/stock.module';
@Module({
  imports: [UserModule, ProductModule, TransactionModule, StockModule], // ,
  controllers: [AppController],
  providers: [
    AppService,
    UserService,
    // ProductCRUDService,
    // StockCRUDService,
    // StockService,
    // ProductService,
  ],
})
export class AppModule {}
