import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-[#002743] text-white flex flex-col w-64 p-8 h-[100vh] fixed justify-between font-bold">
      <div className="flex flex-col gap-12">
        <img
          className="h-[80px]"
          src="/assets/images/navbar/logo_emmaus.svg"
          alt=""
        />
        <h1 className="text-center text-2xl font-bold">
          Bienvenue <br /> John
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
        <Link to="/app/faq" className="flex">
          <img
            className="px-3"
            src="/assets/images/navbar/logo_faq.svg"
            alt=""
          />
          FAQ
        </Link>
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
