interface Player{
    name : string;
    score : string;
}
export interface IGameState {
    players?: {
      id: string;
      name: string;
      score: number;
    }[];
    state: string;
    currentPlayer ?: Player;
    opponentPlayer ?: Player;
  }