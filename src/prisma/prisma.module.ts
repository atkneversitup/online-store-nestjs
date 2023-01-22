import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prisma } from './prisma.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'online-shop',
      entities: [Prisma],
      synchronize: true,
      migrations: [__dirname + '/migrations/*.js'],
    }),
  ],
})
export class PrismaModule { }