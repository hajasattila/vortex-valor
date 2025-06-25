export interface UserModel {
  uid: string;
  username: string;
  email?: string;
  avatarUrl?: string;
  //FK → Skins.id
  characterSkins: string[];
  //FK → CardModel.id
  ownedCards: string[];
  //FK → CardModel.id
  equippedDeck: string[];
  coins: number;                // shop
  shards: number;               // craft
  elo: number;
  isOnline: boolean;
  //FK → UserModel.uid
  friends: string[];            // UID list
  //FK → UserModel.uid
  blockedUsers?: string[];
  createdAt: string;            // ISO string (`toDate().toISOString()`)
  lastLogin?: string;
  suspended?: boolean;
}
