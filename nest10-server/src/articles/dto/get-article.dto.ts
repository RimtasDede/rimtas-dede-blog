import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class GetArticleDto {
  @ApiProperty({ description: 'Article slug' })
  @IsNotEmpty()
  @Type(() => String)
  @MinLength(1)
  @MaxLength(100)
  slug: string;
}
