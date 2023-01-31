import { Module } from '@nestjs/common';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { StockCRUDService } from './stockcrud.service';
@Module({
  imports: [PrismaModule],
  providers: [StockService, StockCRUDService],
  controllers: [StockController],
  exports: [StockService],
})
export class StockModule {}
