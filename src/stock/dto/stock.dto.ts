import { IsEmpty, IsNumber, IsString } from 'class-validator';
export class CreateStockHistoryDto {
  @IsNumber()
  @IsEmpty()
  productId: number;
  @IsNumber()
  @IsEmpty()
  quantity: number;
  @IsString()
  @IsEmpty()
  type: string;
}
