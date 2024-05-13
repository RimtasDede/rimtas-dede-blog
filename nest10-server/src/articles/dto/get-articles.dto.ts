import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsPositive, Max, Min } from 'class-validator';

export class GetArticlesDto {
  @ApiProperty({ description: 'Page' })
  @IsNotEmpty()
  @Type(() => Number)
  @IsPositive()
  page: number;

  @ApiProperty({ description: 'Page size' })
  @IsNotEmpty()
  @Type(() => Number)
  @IsPositive()
  @Min(5)
  @Max(50)
  pageSize: number;
}
