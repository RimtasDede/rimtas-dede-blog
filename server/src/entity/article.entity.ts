import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

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

  @Column({ nullable: true })
  text: string;

  @Column({ nullable: true })
  tags: string;

  @Column({ nullable: true })
  mainImage: string;

  @CreateDateColumn({
    type: 'timestamptz',
  })
  created: Date;
}
