import { useState } from "react";
import { Route, Routes } from "react-router-dom";

// import des layouts
import LayoutConnect from "./layouts/LayoutConnect";
import LayoutMain from "./layouts/LayoutMain";
// import des pages
import PageConnexion from "./pages/PageConnexion";
// import UsersMetierPage from "./pages/UsersMetierPage";
import AjoutStock from "./pages/AjoutStock";
import CaracteristiquesPage from "./pages/CaracteristiquesPage";
import FAQPage from "./pages/FAQPage";
import Model from "./pages/Model";
import PageMotDePasseOublier from "./pages/PageMotDePasseOublier";
import PageNouveauMotDePasse from "./pages/PageNouveauMotDePasse";
import Systeme from "./pages/Systeme";
// import des composants
// import de la 404
import Page404 from "./pages/Page404";

function App() {
  const [marques, setMarques] = useState([]);
  const [models, setModels] = useState([]);
  const [couleurs, setCouleurs] = useState([]);
  const [rams, setRams] = useState([]);
  const [stockages, setStockages] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  const [os, setOs] = useState("");
  const [antutu, setAntutu] = useState(12345);
  const [selectedMarque, setSelectedMarque] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedCouleur, setSelectedCouleur] = useState("");
  const [selectedRam, setSelectedRam] = useState("");
  const [selectedStockage, setSelectedStockage] = useState("");

  return isLogged ? (
    // Routes principales une fois loggé
    <LayoutMain setIsLogged={setIsLogged}>
      <Routes>
        {/* <Route path="/app/" element={<UsersMetierPage />} /> */}
        <Route
          path="/app"
          element={<Systeme setMarques={setMarques} os={os} setOs={setOs} />}
        />
        <Route
          path="/app/caracteristiques"
          element={
            <CaracteristiquesPage
              marques={marques}
              models={models}
              couleurs={couleurs}
              rams={rams}
              stockages={stockages}
              antutu={antutu}
              selectedMarque={selectedMarque}
              selectedModel={selectedModel}
              setModels={setModels}
              setCouleurs={setCouleurs}
              setRams={setRams}
              setStockages={setStockages}
              setAntutu={setAntutu}
              setSelectedMarque={setSelectedMarque}
              setSelectedModel={setSelectedModel}
              setSelectedCouleur={setSelectedCouleur}
              setSelectedRam={setSelectedRam}
              setSelectedStockage={setSelectedStockage}
            />
          }
        />
        <Route path="/app/model" element={<Model />} />
        <Route path="/app/systeme" element={<Systeme />} />
        <Route path="/app/faq" element={<FAQPage />} />
        <Route
          path="/app/ajoutstock"
          element={
            <AjoutStock
              antutu={antutu}
              os={os}
              selectedMarque={selectedMarque}
              selectedModel={selectedModel}
              selectedCouleur={selectedCouleur}
              selectedRam={selectedRam}
              selectedStockage={selectedStockage}
            />
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </LayoutMain>
  ) : (
    // Routes de connexion et oublie mot de passe
    <LayoutConnect>
      <Routes>
        <Route path="/nouveau-motdepasse" element={<PageNouveauMotDePasse />} />
        <Route path="/reinitialiser" element={<PageMotDePasseOublier />} />
        <Route path="/" element={<PageConnexion setIsLogged={setIsLogged} />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </LayoutConnect>
  );
}

export default App;
