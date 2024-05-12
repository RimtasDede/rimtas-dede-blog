import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Article } from 'src/models/articles/article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article) private usersRepository: Repository<Article>,
  ) {}

  findOne(id: number): Promise<Article | null> {
    return this.usersRepository.findOneBy({
      id,
    });
  }

  findAll(page: number = 1, pageSize: number = 20): Promise<[Article[], number]> {
    const skip = (page - 1) * pageSize;
    const result = this.usersRepository.findAndCount({
      skip,
      take: pageSize,
      order: { created: 'DESC' },
    });

    return result;
  }
}
