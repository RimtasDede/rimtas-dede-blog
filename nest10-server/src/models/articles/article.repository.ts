import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Article } from './article.entity';

export class UserRepository extends Repository<Article> {
  // constructor(
  //   @InjectRepository(Article),
  // ) {}
}
