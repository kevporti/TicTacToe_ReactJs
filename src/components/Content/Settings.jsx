import React from "react";

function Settings({ restartGame }) {
  return (
    <div className="mx-4 border-2 border-darkblue rounded-sm">
      <h1 className="font-medium text-center text-3xl">Settings</h1>
      <div
        className="font-medium p-2 border rounded m-4 cursor-pointer"
        onClick={restartGame}
      >
        Restart
      </div>
      <div></div>
    </div>
  );
}

export default Settings;
