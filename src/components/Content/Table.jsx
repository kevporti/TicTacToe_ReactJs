import React, { useState } from "react";
import Box from "./Box.jsx";

function Table() {
  let Cells = [
    { boxId: 1, boxName: "uno" },
    { boxId: 2, boxName: "dos" },
    { boxId: 3, boxName: "tres" },
    { boxId: 4, boxName: "cuatro" },
    { boxId: 5, boxName: "cinco" },
    { boxId: 6, boxName: "seis" },
    { boxId: 7, boxName: "siete" },
    { boxId: 8, boxName: "ocho" },
    { boxId: 9, boxName: "nueve" },
  ];

  const [Boxuno, setBoxuno] = useState(0);
  const [Boxdos, setBoxdos] = useState(0);
  const [Boxtres, setBoxtres] = useState(0);
  const [Boxcuatro, setBoxcuatro] = useState(0);
  const [Boxcinco, setBoxcinco] = useState(0);
  const [Boxseis, setBoxseis] = useState(0);
  const [Boxsiete, setBoxsiete] = useState(0);
  const [Boxocho, setBoxocho] = useState(0);
  const [Boxnueve, setBoxnueve] = useState(0);

  return (
    <div className="grid grid-cols-3 gap-4 border-4 border-darkblue rounded p-4 mx-4">
      {Cells.map(({ boxId }) => {
        return <Box key={boxId} Id={boxId} />;
      })}
    </div>
  );
}

export default Table;
