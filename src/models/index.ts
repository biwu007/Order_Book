export type MainNavigatorParams = {
  ['Landing']: undefined;
};

export enum TypeOrder {
  ALL = 'ALL',
  BUY = 'BUY',
  SELL = 'SELL',
}

export interface IBuyItem {
  limit_price: string;
  size: string;
  depth: string;
}

export interface ISellItem {
  limit_price: string;
  size: string;
  depth: string;
}
