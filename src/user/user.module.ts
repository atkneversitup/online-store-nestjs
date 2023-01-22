import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
// import { PrismaModule } from '@prisma/client'
@Module({
  imports: [],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule { }
