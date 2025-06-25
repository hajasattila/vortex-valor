export interface ShopItem {
  id: string;
  type: 'card' | 'skin' | 'booster';
  //FK → CardModel.id || Skins.id
  refId: string;
  price: number;
  currency: 'coins' | 'shards';
  available: boolean;
}
