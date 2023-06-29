export default function Etat() {
  return (
    <>
      <div className="text-white w-full flex items-center justify-center gap-8">
        <button className="w-32 py-2 font-bold bg-[#002743] rounded-md">
          Parfait état
        </button>
        <button className="w-32 py-2 font-bold bg-[#002743] rounded-md">
          Très bon état
        </button>
        <button className="w-32 py-2 font-bold bg-[#002743] rounded-md">
          Bon état
        </button>
        <button className="w-32 py-2 font-bold bg-[#002743] rounded-md">
          Satisfaisant
        </button>
      </div>

      <h3 className="text-lg font-bold">Présence d&apos;un chargeur ?</h3>
      <div className="flex gap-8">
        <div>
          <input className="mr-2" type="radio" name="charger" id="chargeryes" />
          <label htmlFor="chargeryes">Oui</label>
        </div>
        <div>
          <input className="mr-2" type="radio" name="charger" id="chargerno" />
          <label htmlFor="chargerno">Non</label>
        </div>
      </div>
    </>
  );
}
