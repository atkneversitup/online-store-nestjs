import { Injectable } from '@nestjs/common';
import { Post, Prisma } from '@prisma/client';
import { PostData } from '../interface/postdata.interface';
import { PostCRUDService } from './postcrud.service';
@Injectable()
export class PostService {
  constructor(private postcrudService: PostCRUDService) { }
  async findFeed(): Promise<Post[]> {
    // fitler posts by published: true
    return this.postcrudService.findMany({ where: { published: true } });
  }
  async findMany(params?: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PostWhereUniqueInput;
    where?: Prisma.PostWhereInput;
    orderBy?: Prisma.PostOrderByWithRelationInput;
  }): Promise<Post[]> {
    return this.postcrudService.findMany(params);
  }
  async filterPostByString(searchString: string): Promise<Post[]> {
    return this.postcrudService.findMany({
      where: {
        OR: [
          { title: { contains: searchString } },
          { content: { contains: searchString } },
        ],
      },
    });
  }
  async findPostRecord(id: number): Promise<Post | null> {
    return this.postcrudService.findOne(id);
  }
  async createPost(data: PostData): Promise<Post> {
    return this.postcrudService.create(data);
  }
  async publishPost(id: number): Promise<Post> {
    return this.postcrudService.update({
      where: { id },
      data: { published: true },
    });
  }
  async updatePost(id: number, data: Post): Promise<Post> {
    return this.postcrudService.update({
      where: { id },
      data,
    });
  }
  async deletePost(id: number): Promise<Post> {
    return this.postcrudService.delete(id);
  }
}
