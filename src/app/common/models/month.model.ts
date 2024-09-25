export interface MonthWrap {
  id: string;
  value: Date;
  title: string;
  total: number;
  categories: Category[];
}

export type Category = {
  id: string;
  name: string;
  value?: number;
  sub: Category[];
  type: CategoryType;
};

export type CategoryType = 'main' | 'sub' | 'individual';

export const CategoryInitValue = 0;
