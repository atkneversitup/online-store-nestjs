import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { UserService } from './user/user.service';
import { PostService } from './post/post.service';
import { PostCRUDService } from './post/postcrud.service';
import { ProductModule } from './product/product.module';
import { TransactionModule } from './transaction/transaction.module';
import { PrismaModule } from './prisma/prisma.module';
import { StockModule } from './stock/stock.module';
@Module({
  imports: [
    UserModule,
    PostModule,
    ProductModule,
    TransactionModule,
    PrismaModule,
    StockModule,
  ], // ,
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    UserService,
    PostService,
    PostCRUDService,
    // ProductCRUDService,
    // StockCRUDService,
    // StockService,
    // ProductService,
  ],
})
export class AppModule {}
