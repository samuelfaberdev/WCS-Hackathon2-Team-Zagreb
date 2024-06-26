import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Etat from "@components/Etat";
import MobileScore from "@components/MobileScore";
import Popup from "@components/Popup";
import SmartPhone from "@components/Smartphone";

export default function Model({
  selectedMarque,
  selectedModel,
  selectedCouleur,
  selectedRam,
  selectedStockage,
  os,
  antutu,
}) {
  const [step, setStep] = useState("stocked");
  const [buttonPopup, setButtonPopup] = useState(false);
  const navigate = useNavigate();

  const nextStep = (e) => {
    e.preventDefault();
    step === "etat" && setStep("stocked");
    step === "prix" && popup();
    step === "stocked" && navigate("/app/");
    console.log(step);
  };

  const popup = () => {
    setButtonPopup(true);
    setStep("stocked");
  };

  const prevStep = (e) => {
    console.log(step);
    e.preventDefault();
    step === "stocked" && setStep("prix");
    step === "prix" && setStep("etat");
  };
  return (
    <>
      {<Popup trigger={buttonPopup} setTrigger={setButtonPopup} />}
      <div className="flex flex-col items-center gap-8">
        <SmartPhone
          selectedMarque={selectedMarque}
          selectedModel={selectedModel}
          selectedCouleur={selectedCouleur}
          selectedRam={selectedRam}
          selectedStockage={selectedStockage}
          os={os}
          antutu={antutu}
        />
        {step === "etat" && <Etat />}
        {step !== "etat" && (
          <MobileScore
            selectedRam={selectedRam}
            selectedStockage={selectedStockage}
            antutu={antutu}
          />
        )}
        <div className="flex gap-20">
          {step !== "stocked" && (
            <button
              onClick={prevStep}
              className="bg-[#a7a7a7] px-8 py-3 rounded-full text-white font-bold text-lg "
            >
              Retour
            </button>
          )}

          {/* {step === "stocked" && (
            <div className="flex gap-2 items-center justify-center">
              <img
                src="/assets/images/yellow_check.svg"
                className="h-[24px] w-[24px]"
              />
              <p>Ce téléphone est ajouté au stock</p>
            </div>
          )} */}
          <button
            onClick={nextStep}
            className="bg-[#00acb0] px-8 py-3 rounded-full text-white font-bold text-lg"
          >
            {step === "etat"
              ? "Valider"
              : step === "prix"
              ? "Ajouter au stock"
              : "Enregistrer un nouvel appareil"}
          </button>
        </div>
      </div>
    </>
  );
}
