import { useState, Fragment, useEffect } from "react";
import { calculateWinner } from "../../calculateWinner";
import Table from "./Table";
import Settings from "./Settings";
import { Transition, Dialog } from "@headlessui/react";

export default function Home() {
  //Variables to track the history, the steps ahead, who's next and the winner if there's one.
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const whoIsIt = xIsNext ? "X" : "O";
  const [modalWinnerOpen, setModalWinnerOpen] = useState(false);
  const [iconType, setIconType] = useState("default");

  useEffect(() => {
    if (winner) {
      openModal();
    }
  }, [winner]);

  function openModal() {
    setModalWinnerOpen(true);
  }

  function closeModal() {
    setModalWinnerOpen(false);
  }

  function restartGame() {
    //Resets the logic to 0 and you'll be able to play again.
    const resetStepNumber = 0;
    setHistory([Array(9).fill(null)]);
    setStepNumber(resetStepNumber);
    setXIsNext(true);
  }

  function handleGame(i) {
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
    <>
      <div className="flex justify-center mx-56 mt-12">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <div className="w-auto">
          <Table
            boxes={history[stepNumber]}
            iconType={iconType}
            handleGame={handleGame}
          />
        </div>
        <div className="w-1/4">
          <Settings
            restartGame={restartGame}
            setIconType={setIconType}
          />
        </div>
      </div>

      {winner ? (
        <Transition appear show={modalWinnerOpen} as={Fragment}>
          <Dialog as="div" className="z-10 relative" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-20" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-bgtable p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      We have a winner!
                    </Dialog.Title>
                    <div className="mt-2">
                      {winner ? `Team ${winner} has won this time.` : null}
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md bg-darkblue px-4 py-2 text-sm font-medium text-bgtable focus:outline-none"
                        onClick={restartGame}
                      >
                        Done.
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      ) : null}
    </>
  );
}
