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

  findAll(): Promise<Article[]> {
    return this.usersRepository.find({
      order: { created: 'DESC' },
    });
  }
}
