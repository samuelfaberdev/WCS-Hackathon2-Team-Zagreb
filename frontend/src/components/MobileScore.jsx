import {  useEffect, useState } from "react";

export default function MobileScore() {
  const prix = 0; // quel calcul pour évaluer le prix ?
  let category = 4; // catégorie sera dynamique selon le prix

  const [scoreColor, setScoreColor] = useState("");

  useEffect(() => {
    switch (category) {
      case 1:
        setScoreColor("blue");
        break;
      case 2:
        setScoreColor("green");
        break;
      case 3:
        setScoreColor("yellow");
        break;
      case 4:
        setScoreColor("orange");
        break;
      case 5:
        setScoreColor("red");
        break;
      default:
        setScoreColor("");
    }
}, [category])

  return (
    <div className="w-[50%] flex justify-between items-center">
      <div className="">
      <span className="flex items-center text-white justify-center bg-[#002743] rounded-full">
        <div
        style={{borderColor : scoreColor}}
        className={`bg-[#002743] text-white p-14 rounded-full flex items-center justify-center flex-col border-solid border-8 gap-3`}
        >
          <p className="flex items-center justify-center rounded-full ">
            Catégorie
          </p>
          <p className="text-4xl">{category}-B</p>
        </div>
      </span>
      <div className="flex items-center justify-center gap-6">
        <div>
        <p className="flex items-center text-white justify-center bg-[#002743] rounded-full w-8 h-8">
          89
        </p>
        <p className="flex">Untutu</p>
        </div>
        <div>
        <p className="flex items-center text-white justify-center bg-[#002743] rounded-full w-8 h-8">
          40
        </p>
        <p className="">RAM</p>
        </div>
        <div>
        <p className="flex items-center text-white justify-center bg-[#002743] rounded-full w-8 h-8">
          60
        </p>
        <p className="">Stockage</p>
        </div>
      </div>
      </div>
      <div className="flex flex-col items-center">
      <h1>Prix conseillé</h1>
      <h2>{prix} €</h2>
      </div>
    </div>
  );
}
