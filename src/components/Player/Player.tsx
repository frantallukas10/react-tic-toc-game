import React, { FC, useState, ChangeEvent } from 'react';
import { PlayerSymbol } from '../../types';

interface PlayerProps {
  initialName: string;
  symbol: PlayerSymbol;
  isActive: boolean;
  onChangeName: (symbol: PlayerSymbol, name: string) => void;
}

export const Player: FC<PlayerProps> = ({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditClick = () => {
    setIsEditing((prev) => !prev);
    isEditing && onChangeName(symbol, playerName);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
  };

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
};
