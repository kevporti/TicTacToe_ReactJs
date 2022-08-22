import { click } from "@testing-library/user-event/dist/click";
import React from "react";

function Box({ Id }) {
  return (
    <div className="flex justify-center items-center text-2xl bg-darkblue border rounded-sm h-20 w-20 cursor-pointer">
      {Id}
    </div>
  );
}

export default Box;
