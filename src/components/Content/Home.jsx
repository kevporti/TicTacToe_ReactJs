import React, { useState } from "react";
import { calculateWinner } from "../../calculateWinner";
import Table from "./Table";
import Settings from "./Settings";

function Home() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const whoIsIt = xIsNext ? "X" : "O";

  function onClick(i) {
    const historyPoint = history.slice(0, stepNumber + 1);
    const currentPoint = historyPoint[stepNumber];
    const boxes = [...currentPoint];
    //
    if (winner || boxes[i]) return;
    //
    boxes[i] = whoIsIt;
    setHistory([...historyPoint, boxes]);
    setStepNumber([historyPoint.length]);
    setXIsNext(!xIsNext);
  }

  return (
    <div className="flex mx-56 h-full mt-12">
      <div className="w-3/4">
        <Table Boxes={history[stepNumber]} onClick={onClick} />
      </div>
      <div className="w-1/4">
        <Settings />
      </div>
    </div>
  );
}

export default Home;
