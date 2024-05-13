import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsPositive } from 'class-validator';

export class GetArticleDto {
  @ApiProperty({ description: 'Article ID' })
  @IsNotEmpty()
  @Type(() => Number)
  @IsPositive()
  id: number;
}
