import { Controller, Get, Param } from '@nestjs/common';

import { ArticlesService } from './articles/articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(
    private articleService: ArticlesService,
  ) {}

  @Get(':id')
  getOne(@Param('id') id: string): string | any {
    return this.articleService.findOne(+id);
  }

  @Get()
  getAll(): string | any {
    return this.articleService.findAll();
  }
}
