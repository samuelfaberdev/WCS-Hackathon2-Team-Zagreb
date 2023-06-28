import { useEffect, useState } from "react";

export default function MobileScore({ category }) {
  const prix = 0;

  const [scoreColor, setScoreColor] = useState("red");

  useEffect(() => {
      console.log(scoreColor);
      console.log(category)
      switch (category) {
        case "1":
          setScoreColor("blue");
          break;
        case "2":
          setScoreColor("green");
          break;
        case "3":
          setScoreColor("yellow");
          break;
        case "4":
          setScoreColor("orange");
          break;
        case "5":
          setScoreColor("#000000");
          break;
        default:
          setScoreColor("");
      }
  }, [category]);

  return (
    <div className="flex justify-between items-center">
      <span className="flex items-center text-white justify-center bg-[#002743] w-4 h-4 rounded-full ">
        <div
          className={`bg-[#002743] text-white p-10 rounded-full w-32 flex items-center justify-center flex-col border-solid border-[${scoreColor}] border-8 `}
        >
          <p className="flex items-center justify-center rounded-full">
            Catégorie
          </p>
          <p className="">{category}</p>
        </div>
      </span>
      <div>
        <p className="flex items-center text-white justify-center bg-[#002743] rounded-full w-8 h-8">
          89
        </p>
        <p className="">Untutu</p>
        <p className="flex items-center text-white justify-center bg-[#002743] rounded-full w-8 h-8">
          40
        </p>
        <p className="">RAM</p>
        <p className="flex items-center text-white justify-center bg-[#002743] rounded-full w-8 h-8">
          60
        </p>
        <p className="">Stockage</p>
      </div>

      <h1>Prix conseillé</h1>
      <h2>{prix} €</h2>
    </div>
  );
}
