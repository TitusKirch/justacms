import { Media } from './Media';

export interface Articles {
  data: [Article];
}

export interface Article {
  id: number;
  attributes: {
    title: string;
    description: string;
    message: string;
    slug?: string;
    banner?: Media;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
  };
}
