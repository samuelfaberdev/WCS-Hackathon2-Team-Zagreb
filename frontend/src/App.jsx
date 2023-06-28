import { Routes, Route, useLocation } from "react-router-dom";

import PageConnexion from "./pages/PageConnexion";
import LayoutMain from "./layouts/LayoutMain";
import LayoutConnect from "./layouts/LayoutConnect";
import UsersMetierPage from "./pages/UsersMetierPage";
import CaracteristiquesPage from './pages/CaracteristiquesPage';
import Model from "./components/Model";
import Page404 from "./pages/Page404";
import "./App.css";

function App() {
  const location = useLocation();
  const isLogged = location.pathname.startsWith("/app");

  return isLogged ? (
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
    <LayoutConnect>
      <Routes>
        <Route path="/" element={<PageConnexion />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </LayoutConnect>
  );
}

export default App;
