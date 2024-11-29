import React from "react";
import Cell from "./Cell";

export default function Board({ board, onCellClick }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {board.map((value, index) => (
        <Cell key={index} value={value} onClick={() => onCellClick(index)} />
      ))}
    </div>
  );
}
