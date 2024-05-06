import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// id, slug, title, intro, text, tags, mainImage, created, edited
@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  slug: string;

  @Column({ length: 255 })
  title: string;

  @Column('text')
  intro: string;

  @Column('text')
  text: string;

  @Column()
  tags: string;

  @Column()
  mainImage: string;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP(3)' })
  created: string;

  @Column({ type: 'timestamptz', nullable: true })
  edited: string | null;
}
