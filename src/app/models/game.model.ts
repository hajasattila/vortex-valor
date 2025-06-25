import {Timestamp} from 'firebase/firestore';

export interface Game {
  id: string;
  player1: {
    //FK → UserModel.uid
    uid: string;
    //FK → CardModel.id
    hand: string[];
    health: number;
    turnDone: boolean;
  };
  player2: {
    //FK → UserModel.uid
    uid: string;
    //FK → CardModel.id
    hand: string[];
    health: number;
    turnDone: boolean;
  };
  currentTurn: 'player1' | 'player2';
  boardState: any;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  status: 'waiting' | 'in_progress' | 'finished';
  //FK → UserModel.uid
  winnerUid?: string;
  isVsAI: boolean;
}
