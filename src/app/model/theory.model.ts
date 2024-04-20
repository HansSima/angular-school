export interface TheoryModel {
  title: string;
  content: string;
  img: string;
  warning: Warning[];
}

export interface Warning {
  severity: string;
  summary: string;
  detail: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  rating: number;
}

export interface LessonCardItem {
  title?: string;
  img?: string;
}

export interface ContentItem {
  title?: string;
  content: string;
  close: boolean;
}
