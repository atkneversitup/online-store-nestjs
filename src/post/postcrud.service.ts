import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Post, Prisma } from '@prisma/client';
import { CrudInterface } from '../interface/crud.interface';
import { PostData } from '../interface/postdata.interface';
@Injectable()
export class PostCRUDService
  implements CrudInterface<Post, Prisma.PostUpdateInput, Prisma.PostWhereInput>
{
  constructor(private prisma: PrismaService) { }

  async findAll(): Promise<Post[]> {
    return this.prisma.getInstance().post.findMany();
  }
  async findMany(params?: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PostWhereUniqueInput;
    where?: Prisma.PostWhereInput;
    orderBy?: Prisma.PostOrderByWithRelationInput;
  }): Promise<Post[]> {
    return this.prisma.getInstance().post.findMany(params);
  }

  async findOne(id: number): Promise<Post | null> {
    return this.prisma.getInstance().post.findUnique({ where: { id } });
  }

  async create(data: Prisma.PostCreateInput): Promise<Post> {
    return this.prisma.getInstance().post.create({ data });
  }

  async update(params: {
    where: Prisma.PostWhereUniqueInput;
    data: Prisma.PostUpdateInput;
  }): Promise<Post> {
    {
      const { data, where } = params;
      return this.prisma.getInstance().post.update({
        data,
        where,
      });
    }
  }

  async delete(id: number): Promise<Post> {
    return this.prisma.getInstance().post.delete({ where: { id } });
  }
}
