import { CardType } from '../Card/card.type';

export type ColumnType = {
  title: string,
  slug: string,
  color: string,
  items: CardType[],
};
