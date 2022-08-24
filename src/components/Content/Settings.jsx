import React from "react";

function Settings({ restartGame }) {
  return (
    <div className="mx-4 bg-bgtable border-2 border-darkblue rounded-sm text-white">
      <h1 className="font-medium text-center text-3xl">Settings</h1>
      <div
        className="font-medium p-2 border border-darkblue rounded m-4 bg-darkblue cursor-pointer"
        onClick={restartGame}
      >
        Restart
      </div>
      <div></div>
    </div>
  );
}

export default Settings;
