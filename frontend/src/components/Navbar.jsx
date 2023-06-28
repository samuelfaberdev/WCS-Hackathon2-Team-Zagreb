function Navbar() {
  return (
    <div className="bg-[#002743] text-white flex flex-col w-64 p-8 gap-8 h-[100vh] fixed">
      <div className="flex flex-col gap-8">
        <img
          className="h-[80px]"
          src="/assets/images/navbar/logo_emmaus.svg"
          alt=""
        />
        <h1 className="text-center">
          Bienvenue <br /> Ma Couille
        </h1>
        <button className="flex">
          <img
            className="px-3"
            src="/assets/images/navbar/logo_add.svg"
            alt=""
          />
          Nouvelle entrée
        </button>
      </div>
      <div className=" flex flex-col gap-8">
        <button className="flex">
          <img
            className="px-3"
            src="/assets/images/navbar/logo_faq.svg"
            alt=""
          />
          FAQ
        </button>
        <button className="flex">
          <img
            className="px-3"
            src="/assets/images/navbar/logo_parametre.svg"
            alt=""
          />
          Paramètres
        </button>
        <button className="flex">
          <img
            className="px-3"
            src="/assets/images/navbar/logo_deconnexion.svg"
            alt=""
          />
          Déconnexion
        </button>
      </div>
    </div>
  );
}

export default Navbar;
