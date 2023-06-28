import { Routes, Route, useLocation } from "react-router-dom";

// import des layouts
import LayoutMain from "./layouts/LayoutMain";
import LayoutConnect from "./layouts/LayoutConnect";
// import des pages
import PageConnexion from "./pages/PageConnexion";
import UsersMetierPage from "./pages/UsersMetierPage";
import CaracteristiquesPage from "./pages/CaracteristiquesPage";
// import des composants
import Model from "./components/Model";
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
        <Route path="/app/" element={<UsersMetierPage />} />
        <Route path="/app/modele" element={<Model />} />
        <Route
          path="/app/caracteristiques"
          element={<CaracteristiquesPage />}
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </LayoutMain>
  ) : (
    // Routes de connexion et oublie mot de passe
    <LayoutConnect>
      <Routes>
        <Route path="/" element={<PageConnexion />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </LayoutConnect>
  );
}

export default App;
