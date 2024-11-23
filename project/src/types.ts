export interface Link {
  id: string;
  url: string;
  title: string;
  description: string;
  tags: string[];
  createdAt: Date;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: Date;
}

export type ContentType = 'links' | 'notes';