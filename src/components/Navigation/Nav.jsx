import React from "react";
import Logo from "./TitleTicTacToe.png";

function Nav() {
  return (
    <div className="flex justify-center pt-8">
      <img src={Logo} className="h-20 cursor-pointer" />
    </div>
  );
}

export default Nav;
