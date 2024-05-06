import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'test',
      database: 'rimtas-dede-blog',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true, // false for production
    }),
  ],
})
export class DatabaseModule {}
