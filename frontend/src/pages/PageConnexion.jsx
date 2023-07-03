import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function PageConnexion({ setIsLogged }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((userName === "admin") & (password === "nimda69")) {
      setIsLogged(true);
      navigate("/app/");
    } else {
      alert("Mauvais login ou mot de passe");
    }
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };

  return (
    <>
      <section className="flex justify-center relative right-[15%] h-screen">
        <div className="flex items-center ">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center h-8 font-semibold text-5xl w-96">
              <label>Connexion</label>
            </div>
            <div className="flex items-center m-8 flex-col">
              <input
                onChange={handleUsernameChange}
                placeholder="Nom d'utilisateur"
                className="bg-transparent font-bold text-xl w-96 border-solid border-b-2 border-[#002743] focus:outline-none mt-5"
                type="text"
                minLength="4"
                maxLength="20"
                required
              />
            </div>
            <div className="flex items-center flex-col">
              <input
                onChange={handlePasswordChange}
                placeholder="Mot de passe"
                className="bg-transparent font-bold text-xl w-96 border-solid border-b-2 border-[#002743] focus:outline-none mt-5"
                type="password"
                minLength="4"
                maxLength="20"
                required
              />
            </div>
            <div className="flex w-full justify-end py-4 px-8">
              <Link to="/reinitialiser">
                <p className="text-[#00ACB0] font-bold">
                  Mot de passe oublié ?
                </p>
              </Link>
            </div>
            <div className="flex justify-center mt-4">
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
