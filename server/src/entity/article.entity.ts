import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 150,
  })
  slug: string;

  @Column({
    length: 255,
  })
  title: string;

  @Column()
  intro: string;

  @Column()
  tags: string;

  @Column()
  mainImage: string;

  @Column()
  created: string;
}
