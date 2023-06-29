import { useEffect, useState } from "react";

export default function MobileScore({ selectedRam, selectedStockage, antutu }) {
  // const prix = 69; // quel calcul pour évaluer le prix ?
  // catégorie sera dynamique selon le prix

  const [scoreColor, setScoreColor] = useState("");
  const [scoreRam, setScoreRam] = useState("");
  const [scoreAntutu, setScoreAntutu] = useState("");
  const [scoreStockage, setScoreStockage] = useState("");
  const [scoreGlobal, setScoreGlobal] = useState("");
  const [categoryText, setCategoryText] = useState("");
  const [category, setCategory] = useState("");
  const [prix, setPrix] = useState("");

  useEffect(() => {
    switch (selectedRam) {
      case 1:
        setScoreRam(30);
        break;
      case 2:
        setScoreRam(40);
        break;
      case 3:
        setScoreRam(50);
        break;
      case 4:
        setScoreRam(60);
        break;
      case 6:
        setScoreRam(80);
        break;
      case 8:
        setScoreRam(100);
        break;
      case 12:
        setScoreRam(140);
        break;
      case 16:
        setScoreRam(180);
        break;
      default:
        setScoreRam(0);
    }
    console.log(`Score Global : ${scoreRam}`);
  }, [scoreRam]);

  useEffect(() => {
    if (antutu < 50000) {
      setScoreAntutu(40);
    } else if (antutu < 150000) {
      setScoreAntutu(50);
    } else if (antutu < 250000) {
      setScoreAntutu(60);
    } else if (antutu < 350000) {
      setScoreAntutu(70);
    } else if (antutu < 450000) {
      setScoreAntutu(80);
    } else if (antutu < 550000) {
      setScoreAntutu(90);
    } else if (antutu < 650000) {
      setScoreAntutu(100);
    } else if (antutu < 750000) {
      setScoreAntutu(110);
    } else if (antutu < 850000) {
      setScoreAntutu(120);
    } else if (antutu < 950000) {
      setScoreAntutu(130);
    } else {
      setScoreAntutu(140);
    }
    console.log(`Score Antutu : ${scoreAntutu}`);
  }, [scoreAntutu]);

  useEffect(() => {
    switch (selectedStockage) {
      case 16:
        setScoreStockage(31);
        break;
      case 32:
        setScoreStockage(45);
        break;
      case 64:
        setScoreStockage(66);
        break;
      case 128:
        setScoreStockage(82);
        break;
      case 256:
        setScoreStockage(100);
        break;
      case 512:
        setScoreStockage(117);
        break;
      case 1000:
        setScoreStockage(135);
        break;
      default:
        setScoreStockage(0);
    }
    console.log(`Score Global : ${scoreStockage}`);
  }, [scoreStockage]);

  useEffect(() => {
    setScoreGlobal(scoreAntutu + scoreRam + scoreStockage);
    if (scoreGlobal < 90) {
      setCategoryText("1-HC");
      setCategory(1);
      setPrix(0);
    } else if (antutu < 165) {
      setCategoryText("2-P");
      setCategory(2);
      setPrix(49);
    } else if (antutu < 255) {
      setCategoryText("3-B");
      setCategory(3);
      setPrix(99);
    } else if (antutu < 375) {
      setCategoryText("4-A");
      setCategory(4);
      setPrix(149);
    } else {
      setCategoryText("5-P");
      setCategory(5);
      setPrix(249);
    }
    console.log(`Score Global : ${scoreGlobal}`);
  }, [scoreGlobal, prix, category, categoryText]);

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
            <p className="text-3xl font-bold">{categoryText}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6">
          <div className="flex flex-col items-center relative bottom-4 right-8">
            <p className="flex items-center text-white justify-center bg-[#002743] rounded-full w-16 h-16 text-2xl font-bold">
              {scoreAntutu}
            </p>
            <p className="text-sm">Antutu</p>
          </div>
          <div className="flex flex-col items-center relative top-6">
            <p className="flex items-center text-white justify-center bg-[#002743] rounded-full w-16 h-16 text-2xl font-bold">
              {scoreRam}
            </p>
            <p className="text-sm">RAM</p>
          </div>
          <div className="flex flex-col items-center relative bottom-4 left-8">
            <p className="flex items-center text-white justify-center bg-[#002743] rounded-full w-16 h-16 text-2xl font-bold">
              {scoreStockage}
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
