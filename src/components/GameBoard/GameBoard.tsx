import React, { FC } from 'react';
import { GameBoardType } from '../../types';

interface GameBoardProps {
  onSelectSquare: (row: number, col: number) => void;
  board: GameBoardType;
}

export const GameBoard: FC<GameBoardProps> = ({ onSelectSquare, board }) => {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  disabled={playerSymbol !== null}
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};
