import './UsersMetierPage.css';
export default function UsersMetierPage() {
  return (
    <div className="flex flex-col items-center mt-20">
      <h2 className="font-bold text-4xl text-center leading-relaxed ml-40">
        Commencer l&apos;enregistrement de <br /> nouveaux téléphones
      </h2>

      <div className="flex flex-col items-center mt-16 ml-40">
        <button className="button1 mb-7 font-bold">
          Identification automatique
        </button>
        <button className="button2 font-bold">Identification manuelle</button>
      </div>

      <img
        src="/assets/images/phone-flow.jpg"
        alt="phone-flow"
        className="mr-96"
      />
    </div>
  );
}
