import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsInt } from 'class-validator';

export class GetArticleDto {
  @ApiProperty({ description: 'Article ID' })
  @IsNotEmpty()
  @IsInt()
  id: number;

  @ApiProperty()
  aaa: string;
}
