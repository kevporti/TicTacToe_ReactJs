import { useState, Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import default_O from "./XandO/Default_O.png";
import default_X from "./XandO/Default_X.png";
import pirates_O from "./XandO/Pirates_O.png";
import pirates_X from "./XandO/Pirates_X.png";
import dashedLines_X from "./XandO/DashedLines_X.png";
import dashedLines_O from "./XandO/DashedLines_O.png";

export default function Settings({ restartGame, iconType, setIconType }) {
  const [modalSettingsOpen, setModalSettingsOpen] = useState(false);
  const [icon, setIcon] = useState("");

  function openModal() {
    setModalSettingsOpen(true);
  }

  function closeModal() {
    setModalSettingsOpen(false);
  }

  function handleSelectIcons(e) {
    setIcon(e.target.value);
  }

  function handleSettings(e) {
    e.preventDefault();
    setIconType(icon);
    closeModal();
  }

  return (
    <>
      <div className="mx-4 bg-bgtable rounded-lg h-full">
        <h1 className="font-medium text-center text-3xl">Settings</h1>
        <div className="grid grid-cols-2 gap-4 m-4">
          <div
            className="flex justify-center items-center font-medium py-1 border-2 border-darkblue rounded hover:bg-darkblue hover:text-bgtable cursor-pointer"
            onClick={restartGame}
          >
            Restart
          </div>
          <div
            className="flex justify-center items-center font-medium py-1 border-2 border-darkblue rounded hover:bg-darkblue hover:text-bgtable"
            onClick={openModal}
          >
            <i className="material-symbols-outlined cursor-pointer">settings</i>
          </div>
        </div>
      </div>

      <Transition appear show={modalSettingsOpen} as={Fragment}>
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
                    className="text-xl font-bold leading-6 text-darkblue"
                  >
                    Change your icon!
                  </Dialog.Title>
                  <form className="mt-2 text-darkblue font-medium">
                    <hr className="border border-darkblue rounded-full bg-darkblue" />
                    <div className="grid grid-cols-2">
                      <div className="flex flex-col mt-2">
                        <div className="flex">
                          <h1 className="font-medium">Default:</h1>
                        </div>
                        <div className="flex gap-2 mt-2">
                          <img
                            src={default_X}
                            alt=""
                            className="bg-darkblue w-16 rounded"
                          />
                          <img
                            src={default_O}
                            alt=""
                            className="bg-darkblue w-16 rounded"
                          />
                        </div>
                      </div>
                      <div className="flex justify-start items-center">
                        <select
                          name="selectIcons"
                          value={icon}
                          onChange={handleSelectIcons}
                          className="py-1 px-4 bg-darkblue text-bgtable rounded focus:outline-none"
                        >
                          <option value="default">Default</option>
                          <option value="pirates">Pirates</option>
                          <option value="dashedLines">DashedLines</option>
                        </select>
                      </div>
                      <div className="flex flex-col mt-4">
                        <div className="flex">
                          <h1 className="font-medium">DashedLines:</h1>
                        </div>
                        <div className="flex gap-2 mt-2">
                          <img
                            src={dashedLines_X}
                            alt=""
                            className="bg-darkblue w-16 rounded"
                          />
                          <img
                            src={dashedLines_O}
                            alt=""
                            className="bg-darkblue w-16 rounded"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col mt-4">
                        <div className="flex">
                          <h1 className="font-medium">Pirates:</h1>
                        </div>
                        <div className="flex gap-2 mt-2">
                          <img
                            src={pirates_X}
                            alt=""
                            className="bg-darkblue w-16 rounded"
                          />
                          <img
                            src={pirates_O}
                            alt=""
                            className="bg-darkblue w-16 rounded"
                          />
                        </div>
                      </div>
                    </div>
                  </form>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md bg-darkblue px-4 py-2 text-sm font-medium text-bgtable focus:outline-none"
                      onClick={handleSettings}
                    >
                      Done
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
