export interface Skins {
  id: string;
  name: string;
  imageUrl: string;
  rarity: 'common' | 'rare' | 'epic';
  //FK
  forCharacter: string;
}
