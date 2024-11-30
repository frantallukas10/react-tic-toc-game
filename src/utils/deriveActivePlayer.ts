import { GameTurnType, PlayerSymbol } from '../types';

export const deriveActivePlayer = (gameTurns: GameTurnType[]) => {
  // if the game has started, the active player is the opposite of the last player
  let currentPlayer = PlayerSymbol.X;
  if (gameTurns.length > 0 && gameTurns[0].player === PlayerSymbol.X) {
    currentPlayer = PlayerSymbol.O;
  }
  return currentPlayer;
};
