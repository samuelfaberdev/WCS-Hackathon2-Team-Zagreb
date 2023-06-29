import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as phoneAPI from "../service/PhoneAPI.service";

export default function CaracteristiquesPage({
  marques,
  models,
  couleurs,
  rams,
  stockages,
  setStockages,
  setModels,
  setCouleurs,
  setRams,
}) {
  const navigate = useNavigate();

  const [selectedMarque, setSelectedMarque] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedCouleur, setSelectedCouleur] = useState("");
  const [selectedRam, setSelectedRam] = useState("");
  const [selectedStockage, setSelectedStockage] = useState("");

  const goBack = () => {
    navigate("/app/");
  };

  const handleMarqueChange = (e) => {
    setSelectedMarque(e.target.value);
    setModels([]);
    setCouleurs([]);
    console.log(e.target.value);
  };

  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
    setCouleurs([]);
    console.log(e.target.value);
  };

  const handleCouleurChange = (e) => {
    setSelectedCouleur(e.target.value);
    console.log(e.target.value);
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
                  {models !== [] &&
                    models.map((model, index) => (
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
                <p className="font-bold mb-2">Capacité de stockage</p>
                <div className="mb-2">
                  <button className="bg-gray-200 px-1 mx-1 rounded font-medium w-16 h-8">
                    8 Go
                  </button>
                  <button className="bg-gray-200 px-1 mx-1 rounded font-medium w-16 h-8">
                    16 Go
                  </button>
                  <button className="bg-gray-200 px-1 mx-1 rounded font-medium w-16 h-8">
                    32 Go
                  </button>
                </div>
                <div className="mb-10">
                  <button className="bg-gray-200 px-1 mx-1 rounded font-medium w-16 h-8">
                    64 Go
                  </button>
                  <button className="bg-gray-200 px-1 mx-1 rounded font-medium w-16 h-8">
                    128 Go
                  </button>
                  <button className="bg-gray-200 px-1 mx-1 rounded font-medium w-16 h-8">
                    256 Go
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-around items-center ">
                <p className="font-bold mb-2">Capacité de RAM</p>
                <div className="mb-2">
                  <button className="bg-gray-200 px-1 mx-1 rounded font-medium w-16 h-8">
                    2 Go
                  </button>
                  <button className="bg-gray-200 px-1 mx-1 rounded font-medium w-16 h-8">
                    4 Go
                  </button>
                  <button className="bg-gray-200 px-1 mx-1 rounded font-medium w-16 h-8">
                    6 Go
                  </button>
                </div>
                <div className="mb-10">
                  <button className="bg-gray-200 px-1 mx-1 rounded font-medium w-16 h-8">
                    8 Go
                  </button>
                  <button className="bg-gray-200 px-1 mx-1 rounded font-medium w-16 h-8">
                    12 Go
                  </button>
                  <button className="bg-gray-200 px-1 mx-1 rounded font-medium w-16 h-8">
                    16 Go
                  </button>
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
