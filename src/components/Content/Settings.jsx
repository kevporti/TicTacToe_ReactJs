import React, { useState, Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";

function Settings({ restartGame }) {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="mx-4 bg-bgtable border-2 border-darkblue rounded-lg h-full">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
        <h1 className="font-medium text-center text-3xl">Settings</h1>
        <div className="grid grid-cols-2 gap-4 m-4">
          <div
            className="flex justify-center items-center font-medium py-1 border-2 border-darkblue rounded hover:bg-darkblue hover:text-white cursor-pointer"
            onClick={restartGame}
          >
            Restart
          </div>
          <div
            className="flex justify-center items-center font-medium py-1 border-2 border-darkblue rounded hover:bg-darkblue hover:text-white"
            onClick={openModal}
          >
            <i className="material-symbols-outlined cursor-pointer">settings</i>
          </div>
        </div>
        <div></div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Change your icon!
                  </Dialog.Title>
                  <div className="mt-2">
                    <div></div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-darkblue px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
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
    </>
  );
}

export default Settings;
