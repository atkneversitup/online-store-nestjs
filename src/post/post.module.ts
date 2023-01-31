import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PostCRUDService } from './postcrud.service';
import { PrismaService } from 'src/prisma/prisma.service';
@Module({
  imports: [],
  controllers: [PostController],
  providers: [PostService, PostCRUDService, PrismaService],
})
export class PostModule { }
