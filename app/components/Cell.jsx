import React from "react";

export default function Cell({ value, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-20 h-20 bg-gray-100 border border-gray-300 text-2xl font-bold flex items-center justify-center hover:bg-gray-200"
    >
      {value}
    </button>
  );
}
