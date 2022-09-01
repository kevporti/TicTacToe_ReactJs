import Box from "./Box.jsx";

export default function Table({ boxes, handleGame, iconType }) {
  return (
    <div className="grid grid-cols-3 place-items-center gap-4 bg-bgtable rounded-lg p-8">
      {boxes.map((boxContent, i) => (
        <Box
          key={i}
          iconType={iconType}
          boxContent={boxContent}
          handleGame={() => handleGame(i)}
        />
      ))}
    </div>
  );
}
