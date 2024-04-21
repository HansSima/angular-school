import { Message } from 'primeng/api';

export interface TheoryBlockItem {
  title?: string;
  content: string;
  img?: string;
  info?: Message[];
  warning?: Message[];
}

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

export interface Lesson {
  lessonModules: LessonModules[];
  motivations: Motivations[];
}

export interface LessonModules {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  rating: number;
}

export interface Motivations {
  title?: string;
  content: string;
  close: boolean;
}
