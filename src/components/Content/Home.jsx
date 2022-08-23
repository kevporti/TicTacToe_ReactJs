import React, { useState } from "react";
import { calculateWinner } from "../../calculateWinner";
import Table from "./Table";
import Settings from "./Settings";

function Home() {
  //Variables to track the history, the steps ahead, who's next and the winner if there's one.
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const whoIsIt = xIsNext ? "X" : "O";

  function restartGame() {
    //Resets the logic to 0 and you'll be able to play again.
    setHistory([Array(9).fill(null)]);
    setStepNumber(0);
    setXIsNext(true);
  }

  function onClick(i) {
    const historyPoint = history.slice(0, stepNumber + 1);
    const currentPoint = historyPoint[stepNumber];
    const boxes = [...currentPoint];
    //If the winner is found or the box has already been chosen, returns nothing.
    if (winner || boxes[i]) return;
    //Selects the box and continues with the flow.
    boxes[i] = whoIsIt;
    setHistory([...historyPoint, boxes]);
    setStepNumber([historyPoint.length]);
    setXIsNext(!xIsNext);
  }

  return (
    <div className="flex mx-56 mt-12">
      <div className="w-3/4">
        <Table Boxes={history[stepNumber]} onClick={onClick} />
      </div>
      <div className="w-1/4">
        <Settings restartGame={restartGame} />
      </div>
    </div>
  );
}

export default Home;
