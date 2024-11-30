import { GameBoardType, PlayersType, PlayerSymbol } from '../types';
import { WINNING_COMBINATIONS } from '../const';

export const deriveWinner = (
  gameBoard: GameBoardType,
  players: PlayersType,
) => {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    // check if all squares in the combination have the same symbol
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

    // if all squares have the same symbol, we have a winner
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      // set the winner with name of the player by the symbol
      winner = players[firstSquareSymbol as PlayerSymbol];
    }
  }
  return winner;
};
