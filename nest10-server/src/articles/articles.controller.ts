import { Controller, Get, Param, ParseIntPipe, Query, ValidationPipe } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

import { GetArticleDto } from './dto/get-article.dto';
import { ArticlesService } from './articles/articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(
    private articleService: ArticlesService,
  ) {}

  @Get(':id/:aaa')
  @ApiOperation({ summary: 'Return specific article by ID' })
  getOne(
    @Param(ValidationPipe) params: GetArticleDto,
  ) {
    return this.articleService.findOne(params.id);
  }

  @Get()
  @ApiOperation({ summary: 'Return articles' })
  getAll(
    @Query('page', ParseIntPipe) page: number,
    @Query('pageSize', ParseIntPipe) pageSize: number,
  ) {
    return this.articleService.findAll(page, pageSize);
  }
}
