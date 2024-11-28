"use client";
import React, { useState } from "react";
import Cell from "./Cell";

export default function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  return (
    <div className="grid grid-cols-3 gap-2">
      {board.map((value, index) => (
        <Cell key={index} value={value} onClick={() => onCellClick} />
      ))}
    </div>
  );
}
