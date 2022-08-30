import React from "react";
import Default_O from "./XandO/Default_O.png";
import Default_X from "./XandO/Default_X.png";
import Pirates_O from "./XandO/Pirates_O.png";
import Pirates_X from "./XandO/Pirates_X.png";

function Box({ value, onClick, settings }) {
  function opciones(value) {
    if (settings === "Default") {
      if (value === "X") {
        return Default_X;
      } else if (value === "O") {
        return Default_O;
      } else {
        return undefined;
      }
    } else if (settings === "Pirates") {
      if (value === "X") {
        return Pirates_X;
      } else if (value === "O") {
        return Pirates_O;
      } else {
        return undefined;
      }
    } else {
      return null;
    }
  }

  return (
    <div
      className="flex justify-center items-center text-3xl font-medium bg-darkblue rounded h-20 w-20 cursor-pointer"
      onClick={onClick}
    >
      <img src={opciones(value)} alt="" />
    </div>
  );
}

export default Box;
