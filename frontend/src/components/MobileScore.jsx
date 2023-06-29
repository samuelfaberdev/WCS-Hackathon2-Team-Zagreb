import { useEffect, useState } from "react";

export default function MobileScore() {
  const prix = 69; // quel calcul pour évaluer le prix ?
  let category = 2; // catégorie sera dynamique selon le prix

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
  }, [category]);

  return (
    <div className="w-[50%] flex justify-around items-center mb-6">
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center text-white justify-center bg-[#002743] rounded-full w-[196px]">
          <div
            style={{ borderColor: scoreColor }}
            className={`bg-[#002743] text-white p-14 rounded-full flex items-center justify-center flex-col border-solid border-8 gap-3`}
          >
            <p className="flex items-center justify-center rounded-full text-lg font-bold">
              Catégorie
            </p>
            <p className="text-5xl font-bold">{category}-B</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6">
          <div className="flex flex-col items-center relative bottom-4 right-8">
            <p className="flex items-center text-white justify-center bg-[#002743] rounded-full w-16 h-16 text-2xl font-bold">
              89
            </p>
            <p className="text-sm">Untutu</p>
          </div>
          <div className="flex flex-col items-center relative top-6">
            <p className="flex items-center text-white justify-center bg-[#002743] rounded-full w-16 h-16 text-2xl font-bold">
              40
            </p>
            <p className="text-sm">RAM</p>
          </div>
          <div className="flex flex-col items-center relative bottom-4 left-8">
            <p className="flex items-center text-white justify-center bg-[#002743] rounded-full w-16 h-16 text-2xl font-bold">
              60
            </p>
            <p className="text-sm">Stockage</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-3xl">Prix conseillé :</h2>
        <h3 className="text-3xl">{prix} €</h3>
      </div>
    </div>
  );
}
