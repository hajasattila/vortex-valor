export interface CardModel {
  id: string;
  name: string;
  type: 'attack' | 'defense' | 'special';
  power: number;
  cost: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  description: string;
  imageUrl?: string;
  effect?: string;
  isCraftable?: boolean;
  isLimited?: boolean;
  tags?: string[];                // ['poison', 'fire', 'heal']
}
