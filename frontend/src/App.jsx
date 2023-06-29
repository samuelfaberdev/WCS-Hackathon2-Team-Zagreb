import { Routes, Route } from "react-router-dom";
import { useState } from "react";

// import des layouts
import LayoutMain from "./layouts/LayoutMain";
import LayoutConnect from "./layouts/LayoutConnect";
// import des pages
import PageConnexion from "./pages/PageConnexion";
// import UsersMetierPage from "./pages/UsersMetierPage";
import PageMotDePasseOublier from "./pages/PageMotDePasseOublier";
import CaracteristiquesPage from "./pages/CaracteristiquesPage";
import PageNouveauMotDePasse from "./pages/PageNouveauMotDePasse";
import Model from "./pages/Model";
import Systeme from "./pages/Systeme";
import FAQPage from "./pages/FAQPage";
import AjoutStock from "./pages/AjoutStock";
// import des composants
// import de la 404
import Page404 from "./pages/Page404";

// import du CSS
import "./App.css";

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
        <Route path="app" element={<Systeme setMarques={setMarques} os={os} setOs={setOs}/>}>
          <Route
            path="caracteristiques"
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
          <Route path="model" element={<Model />} />
          <Route path="systeme" element={<Systeme />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="ajoutstock" element={<AjoutStock
              antutu={antutu}
              os={os}
              selectedMarque={selectedMarque}
              selectedModel={selectedModel}
              selectedCouleur={selectedCouleur}
              selectedRam={selectedRam}
              selectedStockage={selectedStockage}/>} />
          <Route path="*" element={<Page404 />} />
        </Route>
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
