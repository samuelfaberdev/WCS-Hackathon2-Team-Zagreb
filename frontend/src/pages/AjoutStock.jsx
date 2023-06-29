import { useState } from "react";

import MobileScore from "../components/MobileScore";
import SmartPhone from "../components/SmartPhone";
import Etat from "../components/Etat"
export default function Model() {
  const [step, setStep] = useState("etat");
 
  const nextStep = (e) => {
    e.preventDefault();
    step === "etat" && setStep('prix');
    step === "prix" && setStep('stocked');
    step === 'stocked' && setStep('etat')
    console.log(step)
    
  };

  const prevStep = (e) => {
    console.log(step)
    e.preventDefault();
    step === 'stocked' && setStep('prix')
    step === 'prix' && setStep('etat')
  }
  return (
    <>
      <div className="flex flex-col items-center gap-8">
        <SmartPhone />
         {step === "etat" && <Etat />}
        {step !== 'etat' && <MobileScore />}
        <div className="flex gap-20">
        {step !== 'stocked' &&
          <button 
          onClick={prevStep}
          className="bg-[#a7a7a7] px-8 py-3 rounded-full text-white font-bold text-lg ">
            Retour
          </button>}

          {step === 'stocked' && 
          <div className="flex gap-2">
          <img src="/assets/images/yellow_check.svg" />
          <p>Ce téléphone est ajouté au stock</p>
          </div>}
          <button
            onClick={nextStep}
            className="bg-[#00acb0] px-8  rounded-full text-white font-bold text-lg"
          >{step === 'etat' ? 'Valider' : step === 'prix' ? 'Ajouter au stock' : 'Enregistrer un nouvel appareil'}
          </button>
        </div>
      </div>
    </>
  );
}
