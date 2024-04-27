import * as phoneAPI from "@service/PhoneAPI.service";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CaracteristiquesPage({
  marques,
  models,
  couleurs,
  rams,
  stockages,
  antutu,
  setStockages,
  setModels,
  setCouleurs,
  setRams,
  setAntutu,
  selectedMarque,
  selectedModel,
  setSelectedMarque,
  setSelectedModel,
  setSelectedCouleur,
  setSelectedRam,
  setSelectedStockage,
}) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/app/");
  };

  const handleMarqueChange = (e) => {
    setSelectedMarque(e.target.value);
    setModels([]);
    setCouleurs([]);
    setRams([]);
    setStockages([]);
    console.log(e.target.value);
  };

  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
    setCouleurs([]);
    setRams([]);
    setStockages([]);
    console.log(e.target.value);
  };

  const handleCouleurChange = (e) => {
    setSelectedCouleur(e.target.value);
    console.log(e.target.value);
    console.log(antutu);
  };

  const handleRamsChange = (e) => {
    e.preventDefault();
    setSelectedRam(parseInt(e.target.innerText));
    console.log(parseInt(e.target.innerText));

    let buttonsRam = document.querySelectorAll(".ram.bg-red-200");
    e.target.className =
      "ram bg-red-200 px-1 mx-1 rounded font-medium w-16 h-8";

    if (buttonsRam.length > 0) {
      buttonsRam[0].className =
        "ram bg-gray-200 px-1 mx-1 rounded font-medium w-16 h-8";
    }
  };

  const handleStockagesChange = (e) => {
    e.preventDefault();
    setSelectedStockage(parseInt(e.target.innerText));
    console.log(parseInt(e.target.innerText));

    let buttonsStockage = document.querySelectorAll(".stockage.bg-red-200");
    e.target.className =
      "stockage bg-red-200 px-1 mx-1 rounded font-medium w-16 h-8";

    if (buttonsStockage.length > 0) {
      buttonsStockage[0].className =
        "stockage bg-gray-200 px-1 mx-1 rounded font-medium w-16 h-8";
    }
  };

  useEffect(() => {
    selectedMarque !== "" &&
      phoneAPI.getModel(selectedMarque).then((model) => {
        setModels(model);
      });
  }, [selectedMarque]);

  useEffect(() => {
    selectedModel !== "" &&
      phoneAPI.getCouleur(selectedModel).then((couleur) => {
        setCouleurs(couleur);
      });
    selectedModel !== "" &&
      phoneAPI.getRam(selectedModel).then((ram) => {
        setRams(ram);
      });
    selectedModel !== "" &&
      phoneAPI.getStockage(selectedModel).then((stockage) => {
        setStockages(stockage);
      });
    selectedModel !== "" &&
      phoneAPI.getAntutu(selectedModel).then((antutu) => {
        setAntutu(antutu[0].antutu);
      });
  }, [selectedModel]);

  return (
    <>
      <div>
        <div className="flex justify-center ">
          <h2 className="font-bold text-4xl text-center leading-relaxed mt-14 w-1/3">
            Quelles sont les caractéristiques du téléphone ?
          </h2>
        </div>
        <form>
          <div className="my-24 flex justify-around ">
            <div className="leading-[70px]">
              <div className="flex flex-col">
                <label className="font-bold" htmlFor="Marque">
                  Marque
                </label>
                <select
                  onChange={handleMarqueChange}
                  className="border-b-2 border-black"
                  name="Marques"
                  id="Marque"
                >
                  <option value="">-- selectionner une marque --</option>
                  {marques.map((marque, index) => (
                    <option key={index} value={marque.marque}>
                      {marque.marque}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label className="font-bold" htmlFor="modele">
                  Modèle
                </label>
                <select
                  onChange={handleModelChange}
                  className="border-b-2 border-black"
                  name="modeles"
                  id="modele"
                >
                  <option value="">-- selectionner un modèle --</option>
                  {models.map((model, index) => (
                    <option key={index} value={model.model}>
                      {model.model}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label className="font-bold" htmlFor="couleur">
                  Couleur
                </label>
                <select
                  onChange={handleCouleurChange}
                  className="border-b-2 border-black"
                  name="couleur"
                  id="couleur"
                >
                  <option value="">-- selectionner une couleur --</option>
                  {couleurs.map((couleur, index) => (
                    <option key={index} value={couleur.couleur}>
                      {couleur.couleur}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <div className="flex flex-col justify-around items-center mt-10">
                <p className="font-bold mb-2">Capacité de RAM</p>
                <div className="mb-2">
                  {rams.map((ram, index) => (
                    <button
                      onClick={handleRamsChange}
                      key={index}
                      className="ram bg-gray-200 px-1 mx-1 rounded font-medium w-16 h-8"
                    >
                      {ram.ram} Go
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-around items-center ">
                <p className="font-bold mb-2">Capacité de stockage</p>
                <div className="mb-2">
                  {stockages.map((stockage, index) => (
                    <button
                      onClick={handleStockagesChange}
                      key={index}
                      className="stockage bg-gray-200 px-1 mx-1 rounded font-medium w-16 h-8"
                    >
                      {stockage.stockage} Go
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-[50%] mx-auto">
            <div className="flex justify-between">
              <button
                onClick={goBack}
                className="bg-gray-400 px-8 py-2 rounded-3xl font-bold text-white"
              >
                Retour
              </button>
              <Link
                to="/app/ajoutstock"
                className="bg-[#00ACB0] px-8 py-1 rounded-3xl font-bold text-white flex justify-center items-center"
              >
                Valider
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
