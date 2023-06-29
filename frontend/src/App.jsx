import { Routes, Route, useLocation } from "react-router-dom";

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
  const location = useLocation();
  const isLogged = location.pathname.startsWith("/app");

  return isLogged ? (
    // Routes principales une fois loggé
    <LayoutMain>
      <Routes>
        {/* <Route path="/app/" element={<UsersMetierPage />} /> */}
        <Route path="/app/" element={<Systeme />} />
        <Route path="/app/model" element={<Model />} />
        <Route path="/app/systeme" element={<Systeme />} />
        <Route
          path="/app/caracteristiques"
          element={<CaracteristiquesPage />}
        />
        <Route path="/app/faq" element={<FAQPage />} />
        <Route path="/app/ajoutstock" element={<AjoutStock />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </LayoutMain>
  ) : (
    // Routes de connexion et oublie mot de passe
    <LayoutConnect>
      <Routes>
        <Route path="/nouveau-motdepasse" element={<PageNouveauMotDePasse />} />
        <Route path="/reinitialiser" element={<PageMotDePasseOublier />} />
        <Route path="/" element={<PageConnexion />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </LayoutConnect>
  );
}

export default App;
