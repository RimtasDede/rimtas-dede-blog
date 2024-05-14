import { Controller, Get, NotFoundException, Param, Query, ValidationPipe } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

import { GetArticleDto } from './dto/get-article.dto';
import { ArticlesService } from './articles/articles.service';
import { GetArticlesDto } from './dto/get-articles.dto';

@Controller('articles')
export class ArticlesController {
  constructor(
    private articleService: ArticlesService,
  ) {}

  @Get(':slug')
  @ApiOperation({ summary: 'Return specific article by slug' })
  async getOne(
    @Param() params: GetArticleDto,
  ) {
    const result = await this.articleService.findOne(params.slug);

    if (result === null) {
      throw new NotFoundException('Article dont exists');
    }

    return result;
  }

  @Get()
  @ApiOperation({ summary: 'Return articles' })
  async getAll(
    @Query(ValidationPipe) query: GetArticlesDto,
  ) {
    const result = await this.articleService.findAll(query.page, query.pageSize);

    return result;
  }
}
