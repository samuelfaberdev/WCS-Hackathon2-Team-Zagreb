import { useState } from "react";

export default function PageMotDePasseOublier() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="flex justify-center relative right-[15%] h-screen">
        <div className="flex items-center">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="flex justify-center h-8 font-semibold text-5xl w-[30rem]">
                <label>Mot de passe oublié ?</label>
              </div>
              <div className="flex text-center h-8 font-bold w-[30rem] mt-8 mb-16">
                <label>
                  Pour réinitialiser votre mot de passe, renseignez votre
                  adresse mail
                </label>
              </div>
              <div className="flex items-center flex-col">
                <input
                  placeholder="Adresse mail"
                  className="bg-transparent font-bold text-xl w-96 border-solid border-b-2 border-[#002743] focus:outline-none mt-5"
                  type="email"
                  minlength="4"
                  maxlength="30"
                />
              </div>
              <div className="flex justify-center pt-12">
                <button
                  className="py-3 px-6 bg-[#00ACB0] rounded-3xl font-bold text-white"
                  type="submit"
                >
                  Valider
                </button>
              </div>
            </form>
          ) : (
            <div className="flex items-center flex-col">
              <img src="/assets/images/Icon_validation.png" width={35}></img>
              <p className="font-bold w-96 text-center	">
                Vous allez recevoir un mail à l’adresse mail renseignée pour
                réinitialiser votre mot de passe.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
