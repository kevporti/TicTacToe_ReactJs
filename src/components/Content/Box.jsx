import default_O from "./XandO/Default_O.png";
import default_X from "./XandO/Default_X.png";
import pirates_O from "./XandO/Pirates_O.png";
import pirates_X from "./XandO/Pirates_X.png";
import dashedLines_X from "./XandO/DashedLines_X.png";
import dashedLines_O from "./XandO/DashedLines_O.png";

export default function Box({ boxContent, iconType, handleGame }) {
  function handleChangeIcons(boxContent) {
    if (iconType === "default") {
      if (boxContent === "X") {
        return default_X;
      } else if (boxContent === "O") {
        return default_O;
      }
    } else if (iconType === "pirates") {
      if (boxContent === "X") {
        return pirates_X;
      } else if (boxContent === "O") {
        return pirates_O;
      }
    } else if (iconType === "dashedLines") {
      if (boxContent === "X") {
        return dashedLines_X;
      } else if (boxContent === "O") {
        return dashedLines_O;
      }
    }
  }

  return (
    <div
      className="flex justify-center items-center text-3xl font-medium bg-darkblue rounded h-20 w-20 cursor-pointer"
      onClick={handleGame}
    >
      <img src={handleChangeIcons(boxContent)} alt="" />
    </div>
  );
}
