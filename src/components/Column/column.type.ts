import { CardType } from '../Card/card.type';

export type ColumnType = {
  title: string,
  slug: string,
  color: string,
  items: CardType[],
};

export type ColumnsListType = Record<string, ColumnType>;
