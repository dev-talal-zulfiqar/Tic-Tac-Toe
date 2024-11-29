'use client'
import Board from "./Board";
import GameLogicHook from "../hooks/GameLogicHook";

export default function GameWrapper() {
  const { board, isXNext, winner, handleCellClick, resetGame } = GameLogicHook();

  return (
    <div>
      <Board board={board} onCellClick={handleCellClick} />
      <div className="mt-6">
        {winner ? (
          <p className="text-xl font-bold text-green-600">{winner} Wins!</p>
        ) : (
          <p className="text-xl">Next Player: {isXNext ? "X" : "O"}</p>
        )}
        <button
          onClick={resetGame}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Restart Game
        </button>
      </div>
    </div>
  );
} 