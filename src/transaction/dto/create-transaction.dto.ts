import { IsNotEmpty, IsNumber } from 'class-validator';
export class CreateTransactionDto {
  @IsNumber()
  @IsNotEmpty()
  readonly productId: number;
  @IsNotEmpty()
  @IsNumber()
  readonly quantity: number;
}
