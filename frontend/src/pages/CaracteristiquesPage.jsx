export default function CaracteristiquesPage() {
  return (
    <div>
      <div className="flex justify-center ">
        <h2 className="font-bold text-4xl text-center leading-relaxed mt-14 w-1/3">
          Quelles sont les caractéristiques du téléphone ?
        </h2>
      </div>
      <form action="#">
        <div className="mt-32 flex justify-around ">
          <div className="leading-[70px]">
            <div className="flex flex-col">
              <label className="font-bold" htmlFor="Marque">
                Marque
              </label>
              <select
                className="border-b-2 border-black"
                name="Marques"
                id="Marque"
              >
                <option value="">-- selectionner une marque --</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="font-bold" htmlFor="modele">
                Modèle
              </label>
              <select
                className="border-b-2 border-black"
                name="modeles"
                id="modele"
              >
                <option value="">-- selectionner un modèle --</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="font-bold" htmlFor="couleur">
                Couleur
              </label>
              <select
                className="border-b-2 border-black"
                name="couleur"
                id="couleur"
              >
                <option value="">-- selectionner une couleur --</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-around items-center mt-10">
              <p className="font-bold mb-2">Capacité de stockage</p>
              <div>
                <button className="bg-gray-200 px-1 mx-1 rounded font-medium w-16 h-8 mb-2">
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
              <div>
                <button className="bg-gray-200 px-1 mx-1 mb-2 rounded font-medium w-16 h-8">
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
        <div className="absolute bottom-10 w-full">
          <div className="flex justify-around">
            <button className="bg-gray-400 px-8 py-2 rounded-3xl font-bold text-white">
              Retour
            </button>
            <button className="bg-[#00ACB0] px-8 py-1 rounded-3xl font-bold text-white">
              Valider
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
