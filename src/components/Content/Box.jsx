import React from "react";

function Box({ value, onClick }) {
  return (
    <div
      className="flex justify-center items-center text-3xl font-medium bg-darkblue rounded h-20 w-20 cursor-pointer"
      onClick={onClick}
    >
      {value}
    </div>
  );
}

export default Box;
