export default function PageConnexion() {
  return (
    <>
      <section className="flex justify-center relative right-[15%] h-screen">
        <div className="flex items-center ">
          <form>
            <div className="flex justify-center h-8 font-semibold text-5xl w-96">
              <label>Connexion</label>
            </div>
            <div className="flex items-center m-8 flex-col">
              <input
                placeholder="Nom d'utilisateur"
                className="bg-transparent font-bold text-xl w-96 border-solid border-b-2 border-[#002743] focus:outline-none mt-5"
                type="text"
              />
            </div>
            <div className="flex items-center flex-col">
              <input
                placeholder="Mot de passe"
                className="bg-transparent font-bold text-xl w-96 border-solid border-b-2 border-[#002743] focus:outline-none mt-5"
                type="password"
              />
            </div>
            <div className="flex justify-center pt-12">
              <button
                className="py-3 px-6 bg-[#00ACB0] rounded-3xl font-bold text-white"
                type="submit"
              >
                Se connecter
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
