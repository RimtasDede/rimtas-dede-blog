import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Article } from 'src/models/articles/article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article) private usersRepository: Repository<Article>,
  ) {}

  async findOne(id: number): Promise<Article | null> {
    return await this.usersRepository.findOneBy({
      id,
    });
  }

  async findAll(page: number = 1, pageSize: number = 20): Promise<[Article[], number]> {
    const skip = (page - 1) * pageSize;
    const result = await this.usersRepository.findAndCount({
      skip,
      take: pageSize,
      order: { created: 'DESC' },
    });

    return result;
  }
}
