import React, { FC } from 'react';
import { GameTurnType } from '../../types';

interface LogProps {
  turns: GameTurnType[];
}

export const Log: FC<LogProps> = ({ turns }) => {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}-${turn.square.col}`}>
          {turn.player} selected {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </ol>
  );
};
