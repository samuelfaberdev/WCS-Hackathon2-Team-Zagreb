import { useState } from "react";

import MobileScore from "../components/MobileScore";
import SmartPhone from "../components/SmartPhone";

export default function Model() {
  const [modele, setModele] = useState("");
  const [category, setCategory] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    modele != ""
      ? alert(`le modèle est ${modele}`)
      : alert("please enter a valid model");

    setCategory(modele);
  };
  return (
    <>
      <div className="flex flex-col items-center gap-8">
        <SmartPhone />
        <MobileScore category={category} />
        <div className="flex gap-20">
          <button className="bg-[#a7a7a7] px-8 py-3 rounded-full text-white font-bold text-lg ">
            Retour
          </button>

          <button
            onClick={handleSubmit}
            className="bg-[#00acb0] px-8  rounded-full text-white font-bold text-lg"
          >
            Ajouter au stock
          </button>
        </div>
      </div>
    </>
  );
}
