export default function UsersMetierPage() {
  return (
    <div className="flex flex-col items-center mt-20">
      <h2 className="font-bold text-4xl text-center leading-relaxed">
        Commencer l&apos;enregistrement de <br /> nouveaux téléphones
      </h2>

      <div className="flex flex-col items-center mt-16">
        <button className="bg-[#00acb0] p-1 w-[250px] h-[40px] rounded-[30px] text-white mb-7 font-bold">
          Identification automatique
        </button>
        <button className="p-1 w-[230px] h-[40px] rounded-[30px] border-2 font-bold">
          Identification manuelle
        </button>
      </div>

      <img
        src="/assets/images/phone-flow.jpg"
        alt="phone-flow"
        className="relative right-40"
      />
    </div>
  );
}
