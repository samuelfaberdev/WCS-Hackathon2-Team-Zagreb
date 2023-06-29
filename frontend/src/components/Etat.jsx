export default function Etat() {
    return (
        <>
        <div className="text-white w-full flex items-center justify-center">
        <button className="w-32 py-2 bg-[#002743] mr-8 rounded-md">Parfait état</button>
        <button className="w-32 py-2 bg-[#002743] mr-8 rounded-md">Très bon état</button>
        <button className="w-32 py-2 bg-[#002743] mr-8 rounded-md">Bon état</button>
        <button className="w-32 py-2 bg-[#002743] mr-8 rounded-md">Satisfaisant</button>
        </div>

        <h3>Présence d&apos;un chargeur ?</h3>
        <div>
        <input type="radio" name="oui" id="chargerneeded" />
        <label htmlFor="chargerneeded">Oui</label>
        </div>
        <div>
        <input type="radio" name="oui" id="chargerneeded" />
        <label htmlFor="chargerneeded">Non</label>
        </div>
        </>
    )
}