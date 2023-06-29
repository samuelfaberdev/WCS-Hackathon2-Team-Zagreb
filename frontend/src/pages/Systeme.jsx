function Systeme() {
  return (
    <div className="flex flex-col gap-20">
      <h2 className="titre">
        Quel est le système <br /> d’exploitation du téléphone ?
      </h2>
      <div className="flex justify-center flex-col items-center gap-8">
        <div className="flex flex-row">
          <input className="m-2" type="radio" name="os" id="apple" />
          <div className="bg-[#00ACB0] bg-opacity-40 w-40 rounded-lg flex items-center justify-center gap-5 py-2">
            <label htmlFor="apple">Apple</label>
            <img src="/assets/images/logo_apple.svg" alt="" />
          </div>
        </div>
        <div className="flex flex-row">
          <input className="m-2" type="radio" name="os" id="android" />
          <div className="bg-[#00ACB0] bg-opacity-40 w-40 rounded-lg flex items-center justify-center gap-5 py-2">
            <label htmlFor="android">Android</label>
            <img src="/assets/images/logo_android.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-20">
        <button className="bg-[#a7a7a7] px-8 py-3 rounded-full text-white font-bold text-lg">
          Retour
        </button>
        <button className="bg-[#00acb0] px-8 py-3 rounded-full text-white font-bold text-lg">
          Valider
        </button>
      </div>
    </div>
  );
}

export default Systeme;
