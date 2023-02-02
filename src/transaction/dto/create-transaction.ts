import { IsNotEmpty, IsNumber } from 'class-validator';
export interface ICreateTransaction {
  productId: number;
  quantity: number;
  
}
export class CreateTransactionDto {
  @IsNumber()
  @IsNotEmpty()
  readonly productId: number;
  @IsNotEmpty()
  @IsNumber()
  readonly quantity: number;
  // summary
  @IsNumber()
  readonly total: number;
}
// export interface ICreateTransaction extends CreateTransaction {
//   test: string;
// }
export type CreateTransaction = ICreateTransaction;
