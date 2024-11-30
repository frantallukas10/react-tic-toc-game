import React, { FC } from 'react';

interface GameOverProps {
  winner?: string;
  onRestart: () => void;
}

export const GameOver: FC<GameOverProps> = ({ winner, onRestart }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner ? <p>{winner} won!</p> : <p>It&apos;s a draw!</p>}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
};
