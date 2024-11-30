export type GameBoardType = Array<Array<string | null>>;

export enum PlayerSymbol {
  X = 'X',
  O = 'O',
}

export type PlayersType = {
  [PlayerSymbol.X]: string;
  [PlayerSymbol.O]: string;
};

export type GameTurnType = {
  square: {
    row: number;
    col: number;
  };
  player: PlayerSymbol;
};

export type WinningCombinationType = {
  row: number;
  col: number;
}[][];
