import React from "react";
import Default_O from "./XandO/Default_O.png";
import Default_X from "./XandO/Default_X.png";

function Box({ value, onClick }) {
  return (
    <div
      className="flex justify-center items-center text-3xl font-medium bg-darkblue rounded h-20 w-20 cursor-pointer"
      onClick={onClick}
    >
      <img
        src={value === "X" ? Default_X : value === "O" ? Default_O : undefined}
        alt=""
      />
    </div>
  );
}

export default Box;
