import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from 'midwayjs-cool-core';
import { Column } from 'typeorm';

/**
 * 描述
 */
@EntityModel('news_articles')
export class NewsArticlesEntity extends BaseEntity {
  @Column({ comment: '标题' })
  title: string;
  @Column({ comment: '内容', type: 'text' })
  content: string;
  @Column({ comment: '缩略图', nullable: true })
  avatar: string;
  @Column({ comment: '阅读数量' })
  view_count: number;
  @Column({ comment: '作者', length: 100 })
  author: string;
  @Column({ comment: '是否头条' })
  is_top: boolean;
}
