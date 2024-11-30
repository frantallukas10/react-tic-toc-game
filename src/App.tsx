import React, { useState } from 'react';
import './App.css';
import { Player, GameBoard, Log, GameOver } from './components';
import { PLAYERS } from './const';
import { GameTurnType, PlayerSymbol } from './types';
import { deriveActivePlayer, deriveGameBoard, deriveWinner } from './utils';

const App = () => {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState<GameTurnType[]>([]);

  // helpers
  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);

  const hasDraw = gameTurns.length === 9 && !winner;

  const handleSelectSquare = (rowIndex: number, colIndex: number) => {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        {
          square: {
            row: rowIndex,
            col: colIndex,
          },
          player: currentPlayer,
        },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  };

  const handleRestart = () => {
    setGameTurns([]);
  };

  const handlePlayerNameChanged = (symbol: PlayerSymbol, name: string) => {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: name,
      };
    });
  };

  return (
    <main id="game-container">
      <ol id="players" className="highlight-player">
        <Player
          isActive={activePlayer === PlayerSymbol.X}
          initialName={PLAYERS.X}
          symbol={PlayerSymbol.X}
          onChangeName={handlePlayerNameChanged}
        />
        <Player
          isActive={activePlayer === PlayerSymbol.O}
          initialName={PLAYERS.O}
          symbol={PlayerSymbol.O}
          onChangeName={handlePlayerNameChanged}
        />
      </ol>
      {(winner || hasDraw) && (
        <GameOver winner={winner} onRestart={handleRestart} />
      )}
      <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      <Log turns={gameTurns} />
    </main>
  );
};

export default App;
