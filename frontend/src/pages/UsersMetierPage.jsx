import { Link } from "react-router-dom";

export default function UsersMetierPage() {
  return (
    <div className="flex flex-col items-center mt-20">
      <h2 className="font-bold text-4xl text-center leading-relaxed">
        Commencer l&apos;enregistrement de <br /> nouveaux téléphones
      </h2>

      <div className="flex flex-col items-center mt-16">
        <Link
          to="/app/model"
          className="bg-[#00acb0] p-1 w-[250px] h-[40px] rounded-[30px] text-white mb-7 font-bold flex justify-center items-center"
        >
          Identification automatique
        </Link>
        <Link
          to="/app/caracteristiques"
          className="p-1 w-[230px] h-[40px] rounded-[30px] border-2 font-bold flex justify-center items-center"
        >
          Identification manuelle
        </Link>
      </div>

      <img
        src="/assets/images/phone-flow.png"
        alt="phone-flow"
        className="relative right-40"
      />
    </div>
  );
}
