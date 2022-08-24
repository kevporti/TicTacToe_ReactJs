import React from "react";
import Box from "./Box.jsx";

function Table({ Boxes, onClick }) {
  return (
    <div className="grid grid-cols-3 gap-4 bg-bgtable border-2 border-darkblue rounded-lg p-4 mx-4">
      {Boxes.map((box, i) => (
        <Box key={i} value={box} onClick={() => onClick(i)} />
      ))}
    </div>
  );
}

export default Table;
