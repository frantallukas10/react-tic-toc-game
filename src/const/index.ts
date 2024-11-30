import { GameBoardType, PlayersType, WinningCombinationType } from '../types';

export const INITIAL_GAME_BOARD: GameBoardType = Array.from({ length: 3 }, () =>
  Array.from({ length: 3 }, () => null),
);

export const PLAYERS: PlayersType = {
  X: 'Player 1',
  O: 'Player 2',
};

export const WINNING_COMBINATIONS: WinningCombinationType = [
  // horizontal line on the first row
  [
    { row: 0, col: 0 },
    { row: 0, col: 1 },
    { row: 0, col: 2 },
  ],
  // horizontal line on the second row
  [
    { row: 1, col: 0 },
    { row: 1, col: 1 },
    { row: 1, col: 2 },
  ],
  // horizontal line on the third row
  [
    { row: 2, col: 0 },
    { row: 2, col: 1 },
    { row: 2, col: 2 },
  ],
  // vertical line on the first column
  [
    { row: 0, col: 0 },
    { row: 1, col: 0 },
    { row: 2, col: 0 },
  ],
  // vertical line on the second column
  [
    { row: 0, col: 1 },
    { row: 1, col: 1 },
    { row: 2, col: 1 },
  ],
  // vertical line on the third column
  [
    { row: 0, col: 2 },
    { row: 1, col: 2 },
    { row: 2, col: 2 },
  ],
  //  diagonal line from top left to bottom right
  [
    { row: 0, col: 0 },
    { row: 1, col: 1 },
    { row: 2, col: 2 },
  ],
  // diagonal line from top right to bottom left
  [
    { row: 0, col: 2 },
    { row: 1, col: 1 },
    { row: 2, col: 0 },
  ],
];
