import { INITIAL_GAME_BOARD } from '../const';
import { GameTurnType } from '../types';

export const deriveGameBoard = (gameTurns: GameTurnType[]) => {
  // gameBoard is a 2D array that represents the game board
  let gameBoard = [...INITIAL_GAME_BOARD.map((innerArray) => [...innerArray])];
  for (const turn of gameTurns) {
    const {
      square: { row, col },
      player,
    } = turn;
    // fill the square with the player symbol
    gameBoard[row][col] = player;
  }
  return gameBoard;
};
