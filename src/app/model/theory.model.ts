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
