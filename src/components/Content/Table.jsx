import React from "react";
import Box from "./Box.jsx";

function Table({ Boxes, onClick }) {
  return (
    <div className="grid grid-cols-3 place-items-center gap-4 bg-bgtable rounded-lg p-8">
      {Boxes.map((box, i) => (
        <Box key={i} value={box} onClick={() => onClick(i)} />
      ))}
    </div>
  );
}

export default Table;
