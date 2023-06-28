import React, { useState } from "react";

export default function PageNouveauMotDePasse() {
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
              <div className="flex justify-center h-8 font-semibold text-5xl w-[32rem]">
                <label>Nouveau mot de passe</label>
              </div>
              <div className="flex items-center flex-col mt-8">
                <input
                  placeholder="Nouveau mot de passe"
                  className="bg-transparent font-bold text-xl w-96 border-solid border-b-2 border-[#002743] focus:outline-none mt-5"
                  type="password"
                />
              </div>
              <div className="flex items-center flex-col mt-8">
                <input
                  placeholder="Validation du nouveau mot de passe"
                  className="bg-transparent font-bold text-xl w-96 border-solid border-b-2 border-[#002743] focus:outline-none mt-5"
                  type="password"
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
              Votre mot de passe a bien été réinitialisé.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
